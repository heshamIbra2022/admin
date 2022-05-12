import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { CategoryapiserviceService } from 'src/app/ٍServices/categoryapiservice.service';
import { ProductapiserviceService } from 'src/app/ٍServices/productapiservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  newPrd: Iproduct={} as Iproduct;
  private currentProductID:number=0;
  catList: Icategory[]=[];
  constructor(    private productdAPIService: ProductapiserviceService,
    private myCategoryService:CategoryapiserviceService,
    private router: Router,
    private myactiveRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.myCategoryService.getAllCategories().subscribe((categorylist) => {this.catList=categorylist;
     
    
    })

    this.currentProductID= Number(this.myactiveRoute.snapshot.paramMap.get("pid"));


    this.productdAPIService.getProductByID(this.currentProductID).subscribe(prd =>{
      this.newPrd=prd;
    });
  }

  saveProduct()
  {
    if(this.currentProductID==0){
      this.productdAPIService.addNewProduct(this.newPrd).subscribe(prd=>{
        this.router.navigate(['/products/products']);
      });
    }
    else{
      this.productdAPIService.updateProduct(this.currentProductID,this.newPrd).subscribe(prd =>{

        this.router.navigate(['/products/products']);
      })
    }
   
  }

}
