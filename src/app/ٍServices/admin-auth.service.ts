import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Iuser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private httpOptions;
  constructor(private httpClient:HttpClient ) { 

    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    }
  }
  getAdmins():Observable<Iuser[]>
  {
    return this.httpClient.get<Iuser[]>(`${environment.URL}/Account/getAdmins`) ;
  };

}
