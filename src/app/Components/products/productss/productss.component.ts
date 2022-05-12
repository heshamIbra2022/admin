import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { Ishoppingcartitem } from 'src/app/Models/ishoppingcartitem';
import { CategoryapiserviceService } from 'src/app/ٍServices/categoryapiservice.service';
import { ProductapiserviceService } from 'src/app/ٍServices/productapiservice.service';
import { ShoppingCartServiceService } from 'src/app/ٍServices/shopping-cart-service.service';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrls: ['./productss.component.scss']
})
export class ProductssComponent implements OnInit,OnChanges{
  selectedCatID:number=0;
  categoryList:Icategory[]=[];
  productListOfCat:Iproduct[]=[];
  product:Iproduct |undefined;
  constructor(private myCategoryService:CategoryapiserviceService,
    private productdAPIService: ProductapiserviceService,
    private CartOrderService:ShoppingCartServiceService,
    private userAuthAPIService: UserAuthenticationService,


    private router:Router
    
    ) 
    {
      
      
     }


     getproduct()
     {
       if(this.selectedCatID==0)
       {
        this.productdAPIService.getAllProducts().subscribe(prdList=>{
          this.productListOfCat=prdList;
        });
  
       }
       else{
      this.productdAPIService.getProductsByCategoryID(this.selectedCatID).subscribe((prdList) =>{
        this.productListOfCat=prdList;
      
      });
    } 
     }


  ngOnChanges(changes: SimpleChanges): void {
   
  }

  deleteItem(item:Iproduct)
  {
    this.productListOfCat = this.productListOfCat.filter(p => p !== item);
this.productdAPIService.deleteProduct(item.id).subscribe(prd=>
  {
  });
  this.router.navigate(['/products/products']);

  }

  

  ngOnInit(): void {
    this.myCategoryService.getAllCategories().subscribe((catlist) => {this. categoryList=catlist;
     
    
      })

      this.productdAPIService.getAllProducts().subscribe(prdList=>{
        this.productListOfCat=prdList;
      });

  }

  displayStyle = "none";
  
  openPopup(prd:Iproduct) {
    this.displayStyle = "block";
    this.product=prd;

    setTimeout(() => {
      this.closePopup()
    }, 2500);
  }
  
  
  closePopup() {
    this.displayStyle = "none";
    
  }
  

  }
  

