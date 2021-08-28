import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { APIUrl } from './APIURL';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http:HttpClient,private api:APIUrl) { }
  getAllMovieList():Observable<any[]>{
    return this.http.get<any>(this.api.APIURL+"/api/movies/GetAllMoviesList");
  }
  getMovieList():Observable<any[]>{
    return this.http.get<any>(this.api.APIURL+"/api/movies/GetTopRatedMovies");
  }
  getMovieDetails(id:any):any{
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/movies/GetMovieDetails/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getOttDetails(id:any):any{
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/movies/GetOttDetails/"+id,false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
  getOttList():Observable<any[]>{
    return this.http.get<any>(this.api.APIURL+"/api/movies/GetOttList");
  }
  getAllMovieName()
  {
    var req = new XMLHttpRequest();
    req.open("GET",this.api.APIURL+"/api/movies/GetAllMovieName",false);
    req.send(null);
    return JSON.parse(req.responseText);
  }
}
