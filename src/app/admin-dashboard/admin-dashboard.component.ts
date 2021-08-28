import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    var str = localStorage.getItem('user');
    if(str==null)
    {
      this.router.navigate(['/login/admin'],{queryParams:{'redirectURL':window.location.pathname}});
    }
    else if(JSON.parse(str)['Role']!='Admin')
    {
      this.router.navigate(['/login/admin'],{queryParams:{'redirectURL':window.location.pathname}})
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
