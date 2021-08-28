import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { APIUrl } from '../APIURL';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  moviesList=<any>[];
  APIURL:string;
  constructor(t:Title,private movie:MoviesService,private router:Router,private api:APIUrl) {
    this.movie.getAllMovieList().subscribe(c=>this.moviesList=c);
    t.setTitle("All Movies");
    this.APIURL = this.api.APIURL;
   }
  
  ngOnInit(): void {
  }

}
