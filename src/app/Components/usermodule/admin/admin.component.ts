import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/Models/iuser';
import { AdminAuthService } from 'src/app/ٍServices/admin-auth.service';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
admins :Iuser[]=[];
adminName:string="";
  constructor(private adminauthservice:AdminAuthService,
    

    ) {
if(localStorage.getItem("Token"))
{
  let x:any = localStorage.getItem("Token");
  let y=JSON.parse(x);
  this.adminName=y.name;
}

     }

  ngOnInit(): void {

    this.adminauthservice.getAdmins().subscribe((adminlist)=>
    {
this.admins=adminlist;
    })

    
  }

}
