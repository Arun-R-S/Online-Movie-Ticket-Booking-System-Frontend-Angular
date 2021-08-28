import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
  theatreName=JSON.parse(localStorage.getItem('user') || '{}').TheatreName;
  constructor(
    private router:Router,
    t:Title,
    ) {
    t.setTitle("Dashboard");
   }

  ngOnInit(): void {

    var str = localStorage.getItem('user');
    if(str==null)
    {
      this.router.navigate(['/login/theatre'],{queryParams:{'redirectURL':window.location.pathname}});
    }
    else if(JSON.parse(str)['Role']!='TheatreAdmin')
    {
      this.router.navigate(['/login/theatre'],{queryParams:{'redirectURL':window.location.pathname}})
    }
  }
  w3_open() {
    if ($("#mySidebar").css('display') === 'block') {
      $("#mySidebar").css('display','none');
      $('#myOverlay').css('display','none');
    } else {
      $("#mySidebar").css('display','block');
      $('#myOverlay').css('display','block');
    }
}
  w3_close() {
    
    $("#mySidebar").css('display','none');
    $('#myOverlay').css('display','none');
    
  }
}
