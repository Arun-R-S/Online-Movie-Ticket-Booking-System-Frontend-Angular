import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(
    private router:Router,
    t:Title
    ) { 
    t.setTitle("Home")
  }

  ngOnInit(): void {
    if((JSON.parse(localStorage.getItem('user') || '{}')['Role']=='Admin') && (window.location.pathname=='/' || window.location.pathname=='/home'))
    {
        this.router.navigate(['/admin']);
    }
  }

}
