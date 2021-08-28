import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-view-theatre-admin-request',
  templateUrl: './view-theatre-admin-request.component.html',
  styleUrls: ['./view-theatre-admin-request.component.css']
})
export class ViewTheatreAdminRequestComponent implements OnInit {
  RequestList: any;
  noData=false;
  constructor(
    private admin:AdminService
  ) { }

  ngOnInit(): void {
    this.RequestList = this.admin.getRequestList();
    if(this.RequestList.error!=null)
    {
      this.RequestList = [ {LicenseId : "No Data Found" } ];
      this.noData = true;
    }
    console.log(this.RequestList);
  }
  accept(id:number)
  {
    var res = this.admin.updateRequestStatus(id,true);
    this.ngOnInit();
  }
  decline(id:number){
    var res = this.admin.updateRequestStatus(id,false);
    this.ngOnInit();
  }
}
