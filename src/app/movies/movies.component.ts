import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../movies.service';
import { APIUrl } from '../APIURL';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieId!:string;
  moviedetail!:any;
  APIURL:string;
  OTT=false;
  Tickets=false;
  error=false;
  constructor(
    private activatedRoute: ActivatedRoute ,
    private t:Title,
    private movie:MoviesService,
    private datepipe:DatePipe,
    private api:APIUrl,
    
    ) {
    t.setTitle("Movie Deatils");
    this.APIURL = this.api.APIURL;
   }

  ngOnInit(): void {

    this.movieId = this.activatedRoute.snapshot.params.id;

    if(this.movieId!=null)
    {
      this.moviedetail= this.movie.getMovieDetails(this.movieId);
      if(this.moviedetail.movie.MovieName==null)
      {
        this.error=true;
        return;
      }
      this.t.setTitle(this.moviedetail.movie.MovieName);
      this.moviedetail.movie.ReleaseDate = this.datepipe.transform(this.moviedetail.movie.ReleaseDate, 'dd-MM-yyyy');
      if(this.moviedetail.ott!=null)
      {
        this.OTT=true;
      }
      if(this.moviedetail.ticket!=null)
      {
        this.Tickets=true;
      }
    }

    
  }

}
