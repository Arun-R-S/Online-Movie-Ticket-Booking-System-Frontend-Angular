import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheatreService } from 'src/app/theatre.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  
  total_row!:any;
  total_seat_per_row!:any;
  seatList = new Set();
  todayShow:any;
  online : any;
  offline : any;
  totalTicket!:number;
  remainingTickets!:number;
  proceedbutton=false;
  constructor(
    private show : TheatreService,
    private activatedRoute:ActivatedRoute,
    ) { 
    
  }

  ngOnInit(): void {
    this.todayShow = this.show.getShowDetails(this.activatedRoute.snapshot.params.id);
    this.online = this.show.getOnlineBookedDetails(this.activatedRoute.snapshot.params.id);
    this.offline = this.show.getOfflineBookedDetails(this.activatedRoute.snapshot.params.id);

    
    this.total_row=Array(this.todayShow[0].SeatingDetails.TotalRow).fill(0).map((x, i) => i);
    this.total_seat_per_row =Array(this.todayShow[0].SeatingDetails.TotalColumn+1).fill(0).map((x, i) => i) ;
    this.remainingTickets = (this.todayShow[0].SeatingDetails.TotalRow*this.todayShow[0].SeatingDetails.TotalColumn)-this.online.length-this.offline.length;
    this.totalTicket = this.todayShow[0].SeatingDetails.TotalRow*this.todayShow[0].SeatingDetails.TotalColumn;
    if(this.remainingTickets/(((this.todayShow[0].SeatingDetails.TotalRow*this.todayShow[0].SeatingDetails.TotalColumn)))*100<50)
    {
      $("#ticket_close_soon").css('display','block');
      $("#ticket_closed").css('display','none');
    }
    else
    {
      $("#ticket_close_soon").css('display','none');
      $("#ticket_closed").css('display','none');
    }
    if(this.remainingTickets==0)
    {
      $("#ticket_close_soon").css('display','none');
      $("#ticket_closed").css('display','block');
    }
  }
  ngAfterViewInit():void{
    this.load();
  }

  load() {
    for (var i = 0; i < this.online.length; i++) {
      let body = (<HTMLInputElement>document.getElementById(this.online[i]));
      body.classList.remove("seat");
      body.classList.add("online");
    }
    for (var i = 0; i < this.offline.length; i++) {
      let body = (<HTMLInputElement>document.getElementById(this.offline[i]));
      body.classList.remove("seat");
      body.classList.add("offline");
    }
    
  }
  refresh(){
    this.ngOnInit();
    this.load();
  }

}
