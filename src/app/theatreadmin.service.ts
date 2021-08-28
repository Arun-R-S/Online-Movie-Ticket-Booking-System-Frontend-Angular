import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { APIUrl } from './APIURL';

import { TheatreAdmin } from './models/theatreAdmin';

@Injectable({
  providedIn: 'root'
})
export class TheatreAdminService {
  public theatreAdmin!: Observable<TheatreAdmin>;

  constructor(private http:HttpClient,private api:APIUrl) { }
  login(Email:string,Password:string){

      return this.http.post<TheatreAdmin>(`${this.api.APIURL}/api/theatreadmin/login`, { Email, Password });
  }
  create(data:TheatreAdmin){

    return this.http.post<TheatreAdmin>(`${this.api.APIURL}/api/theatreadmin/createtheatreadmin`, data);
}
  loggedIn(userdata: any)
  {
    localStorage.setItem('user', JSON.stringify(userdata));
  }
  sendMail(data:any){

    return this.http.post<any>(`${this.api.APIURL}/api/theatreadmin/SendMail/`, data);
  }
  forgotPassword(data:any){

    return this.http.put<any>(`${this.api.APIURL}/api/theatreadmin/ForgotPasswordAdmin/`, data);
  }
  addBankAccount(data:any){

    return this.http.post<any>(`${this.api.APIURL}/api/BankAccount/AddBankAccount/`, data);
  }
  getBankAccountDetails(id:number)
  {
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/BankAccount/GetBankAccountDetail/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  deleteBankAccount(id:number)
  {
    var req = new XMLHttpRequest();
    req.open("DELETE",this.api.APIURL+"/api/BankAccount/BankAccountDelete/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
}
