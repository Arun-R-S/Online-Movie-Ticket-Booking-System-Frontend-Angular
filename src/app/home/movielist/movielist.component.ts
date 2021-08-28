import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
import { APIUrl } from 'src/app/APIURL';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movieList=<any>[];
  APIURL:string;
  constructor(private movie:MoviesService,private router:Router,private api:APIUrl) { 
    this.movie.getMovieList().subscribe(c=>this.movieList=c);
    this.APIURL = this.api.APIURL;
  }
  
  ngOnInit(): void {
  }

}
