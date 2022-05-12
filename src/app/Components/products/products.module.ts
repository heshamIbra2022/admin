import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductssComponent } from './productss/productss.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/Guard/auth.guard';
import { ShopcartComponent } from './shopcart/shopcart.component';

const routes:Routes=[
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path: 'products', component:ProductssComponent,canActivate:[AuthGuard]},
  {path: 'shopcart', component:ShopcartComponent,canActivate:[AuthGuard]},
  {path: 'shoppingcart', component:ShoppingcartComponent,canActivate:[AuthGuard]},
  {path: 'products/:pid', component:ProductdetailsComponent,canActivate:[AuthGuard]},
  {path: 'addproduct', component:AddproductComponent,canActivate:[AuthGuard]},
  {path: 'updateproduct/:pid', component:AddproductComponent,canActivate:[AuthGuard]},
]

@NgModule({
  declarations: [
    ProductssComponent,
    ProductdetailsComponent,
    ShoppingcartComponent,
    AddproductComponent,
    ShopcartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
  ]
})
export class ProductsModule { }
