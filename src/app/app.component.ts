import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id=1;
  title = 'OMTBS';
  loginStatus = false;
  firstname ="";
  storage = JSON.parse(localStorage.getItem('user') || '{}');
  
  constructor(
    private router:Router,
  ){
    
    if(Object.keys(this.storage).length === 0 && this.storage.constructor === Object)
    {
      this.loginStatus=false;

    }
    else{
     
      this.loginStatus=true;
    }
  }
  ngOnInit(){
    
    
  }
  logout(){
    localStorage.removeItem("user");
    window.location.href = window.location.pathname;
  }
}
