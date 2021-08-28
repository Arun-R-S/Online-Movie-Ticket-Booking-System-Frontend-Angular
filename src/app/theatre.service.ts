import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { APIUrl } from './APIURL';
import { Observable } from 'rxjs';
import { CreateScreen } from './models/screen';
import { TheatreNewSchedule } from './models/theatreSchedule';



@Injectable({
  providedIn: 'root'
})
export class TheatreService {
  

  constructor(private http:HttpClient,private api:APIUrl) { }

  availableTheatre():Observable<any[]>{
    //return this.http.get<any>(this.api.APIURL+"/api/TheatreSchedule/TodayAvailableList");
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/TheatreSchedule/TodayAvailableList",false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getShowDetails(id:number):Observable<any[]>{
    //return this.http.get<any>(this.api.APIURL+"/api/TheatreSchedule/TodayAvailableList");
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/TheatreSchedule/GetShowDetails/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  alreadyBookedStatus(id:number):Observable<any[]>{
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/BookingDetails/GetSeatFilledStatus/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getOnlineBookedDetails(id:number):Observable<any[]>{
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/BookingDetails/GetOnlineBookedStatus/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getOfflineBookedDetails(id:number):Observable<any[]>{
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/BookingDetails/GetOfflineBookedStatus/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getScreenDetails(id:number):Observable<any[]>{
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/TheatreAdmin/GetScreenDetail/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  deleteScreen(tid:number,id:number):Observable<any[]>{
    var req = new XMLHttpRequest();
    req.open("DELETE",this.api.APIURL+"/api/TheatreAdmin/DeleteScreen/"+tid+"/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  updateScreen(tid:number,id:number,tr:number,tc:number):Observable<any[]>{
    var req = new XMLHttpRequest();
    req.open("PUT",this.api.APIURL+"/api/TheatreAdmin/UpdateScreen/"+tid+"/"+id+"/"+tc+"/"+tr,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  createScreen(data:CreateScreen){
    return this.http.post<any>(`${this.api.APIURL}/api/TheatreAdmin/createscreen`, data);
  }
  getTodaySchedule(id:number)
  {
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/TheatreSchedule/GetTodaySchedule/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getAllScreenNumber(id:number)
  {
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/theatreadmin/GetAllScreenNumber/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  createNewSchedule(data:TheatreNewSchedule){
    
    return this.http.post<any>(`${this.api.APIURL}/api/TheatreAdmin/CreateNewSchedule`,data);
  }
  bookTickets(data:any){
    return this.http.post<any>(`${this.api.APIURL}/api/theatreadmin/BookTickets`, data);
  }
}
