import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
;
import { APIUrl } from './APIURL';
import { AdminLogin } from './models/adminLogin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private http:HttpClient,private api:APIUrl) { }
  login(AdminId:string,Password:string){

    return this.http.post<AdminLogin>(`${this.api.APIURL}/api/admin/adminlogin`, { AdminId, Password });
  }
  getRequestList()
  {
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/Admin/GetRequestList/",false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  updateRequestStatus(id:number,status:boolean)
  {
    var req = new XMLHttpRequest();
    req.open("PUT",this.api.APIURL+"/api/Admin/UpdateRequestStatus/"+id+"/"+status,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
}