import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from 'src/app/Guard/auth.guard';

const routes:Routes=[
  {path:'', redirectTo:'/user', pathMatch:'full'},
  
  {path: 'userlogin', component:UserloginComponent},
  {path: 'userlogout', component:UserlogoutComponent},
  {path: 'adminregister', component:UserregisterComponent,canActivate:[AuthGuard]},
  {path: 'admin', component:AdminComponent,canActivate:[AuthGuard]}

]


@NgModule({
  declarations: [
    UserregisterComponent,
    UserloginComponent,
    UserlogoutComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UsermoduleModule { }
