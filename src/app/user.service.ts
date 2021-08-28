import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { APIUrl } from './APIURL';
import { Login } from './models/login';
import { User } from './models/user';
import { map } from 'rxjs/operators';
import { CreateUser } from './models/createUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject!: BehaviorSubject<User>;
  public users!: Observable<User>;

  constructor(private http:HttpClient,private api:APIUrl) { }
  login(Email:string,Password:string){

      return this.http.post<User>(`${this.api.APIURL}/api/customers/login`, { Email, Password });
  }
  create(data:CreateUser){

    return this.http.post<CreateUser>(`${this.api.APIURL}/api/customers/createcustomer`, data);
}
  loggedIn(userdata: any)
  {
    localStorage.setItem('user', JSON.stringify(userdata));
  }
  bookTickets(data:any){

    return this.http.post<any>(`${this.api.APIURL}/api/customers/BookTickets`, data);
  }
  sendMail(data:any){

    return this.http.post<any>(`${this.api.APIURL}/api/Customers/SendMail/`, data);
  }
  forgotPassword(data:any){

    return this.http.put<any>(`${this.api.APIURL}/api/Customers/ForgotPassword/`, data);
  }
  purchaseSubscription(data:any){
    return this.http.post<any>(`${this.api.APIURL}/api/OttSubscription/NewSubscription/`, data);
  }
  getSubscriptionStatus(id:number){
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/OttSubscription/Subscriptionstatus/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
}
