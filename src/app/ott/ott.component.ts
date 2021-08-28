import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { APIUrl } from '../APIURL';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-ott',
  templateUrl: './ott.component.html',
  styleUrls: ['./ott.component.css']
})
export class OttComponent implements OnInit {
  ottList=<any>[];
  APIURL:string;
  constructor(t:Title,private movie:MoviesService,private router:Router,private api:APIUrl) {
    this.movie.getOttList().subscribe(c=>this.ottList=c);
    t.setTitle("OTT Movies");
    this.APIURL = this.api.APIURL;
   }

  ngOnInit(): void {
  }

}
