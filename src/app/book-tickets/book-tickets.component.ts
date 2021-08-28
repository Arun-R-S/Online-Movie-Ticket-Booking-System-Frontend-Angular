import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { APIUrl } from '../APIURL';
import { TheatreService } from '../theatre.service';
  

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {
  theatreList!:any;
  APIURL!:string;
  shows = false;

  constructor(
    private activatedRoute: ActivatedRoute ,
    private t:Title,
    private theatre:TheatreService,
    private api:APIUrl,
  ) { 
    t.setTitle("Available Theatres");
    this.APIURL = api.APIURL;
  }

  ngOnInit(): void {
    this.theatreList=this.theatre.availableTheatre();
    if(this.theatreList)
    {
      this.shows = true;
    }
    else
    {
      this.shows = false;
    }
  }

}
