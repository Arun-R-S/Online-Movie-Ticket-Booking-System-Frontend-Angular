import { DOCUMENT } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';
import { TheatreService } from 'src/app/theatre.service';
import { UserService } from 'src/app/user.service';
import 'src/assets/booking.js'
declare var bootbox:any;

@Component({
  selector: 'app-sold-tickets',
  templateUrl: './sold-tickets.component.html',
  styleUrls: ['./sold-tickets.component.css']
})
export class SoldTicketsComponent implements OnInit {

  form!:FormGroup
  total_row!:any;
  total_seat_per_row!:any;
  seatList = new Set();
  todayShow:any;
  li : any;
  remainingTickets!:number;
  proceedbutton=false;

  @ViewChild("result") result!: ElementRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    t: Title,
    private router:Router,
    private show:TheatreService,
    private activatedRoute:ActivatedRoute,
    private user:UserService
  ) {
    
    t.setTitle("Available Theatres");
    var str = localStorage.getItem('user');
    if(str==null)
    {
        this.router.navigate(['/login/user'],{queryParams:{'redirectURL':window.location.pathname}});
    }
  }

  ngOnInit(): void {
    this.todayShow = this.show.getShowDetails(this.activatedRoute.snapshot.params.id);
    this.li = this.show.alreadyBookedStatus(this.activatedRoute.snapshot.params.id);
    
    this.total_row=Array(this.todayShow[0].SeatingDetails.TotalRow).fill(0).map((x, i) => i);
    this.total_seat_per_row =Array(this.todayShow[0].SeatingDetails.TotalColumn+1).fill(0).map((x, i) => i) ;
    this.remainingTickets = (this.todayShow[0].SeatingDetails.TotalRow*this.todayShow[0].SeatingDetails.TotalColumn)-this.li.length;

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
    for (var i = 0; i < this.li.length; i++) {
      let body = (<HTMLInputElement>document.getElementById(this.li[i]));
      body.classList.remove("seat");
      body.classList.add("disable");
    }
    
  }

  selectResult(){
    $("#result").html("");
    $("#totalprice").html("Total : "+this.seatList.size+" x "+this.todayShow[0].Schedule.TicketPrice+" = Rs."+this.seatList.size*this.todayShow[0].Schedule.TicketPrice+"/-");

    this.seatList.forEach(function(val){
      $("#result").html($("#result").html()+val+",");
  });
    if(this.seatList.size==0)
    {
      this.proceedbutton = false;
    }
    else{
      this.proceedbutton=true;
    }
   
  }

  select(data: string) {

    if ((<HTMLInputElement>document.getElementById(data)).classList.value == "selected") {

      let body = (<HTMLInputElement>document.getElementById(data));
      body.classList.remove("selected");
      body.classList.add("seat");
      this.seatList.delete(data);
      return;
    }
    if ((<HTMLInputElement>document.getElementById(data)).classList.value == "seat") {
      
      this.seatList.add(data);
      let body = (<HTMLInputElement>document.getElementById(data));
      body.classList.remove("seat");
      body.classList.add("selected");
    }
  }
  booked(){
    this.form = this.formBuilder.group({
      ScheduleId: [''],
      CustomerId: [''],
      BookedSeats: [''],
      TotalPrice: [''],
      TotalBooking: [''],
      SingleTicketPrice: [''],
    });
    var sl="";
    this.seatList.forEach(function(val){
      sl+=val+",";
    });
    this.form.controls;
    this.form.controls.ScheduleId.setValue(this.activatedRoute.snapshot.params.id);
    this.form.controls.CustomerId.setValue(JSON.parse(localStorage.getItem('user') || '{}').CustomerId);
    this.form.controls.TotalPrice.setValue(this.seatList.size*this.todayShow[0].Schedule.TicketPrice);
    this.form.controls.TotalBooking.setValue(this.seatList.size);
    this.form.controls.SingleTicketPrice.setValue(this.todayShow[0].Schedule.TicketPrice);
    this.form.controls.BookedSeats.setValue(sl.slice(0, -1));


    this.show.bookTickets(this.form.value)
    .pipe(first())
    .subscribe((c=>{
      if(c.BookingId==null)
      {
        bootbox.alert(c);
      }
      else{
        
        //this.user.loggedIn(c);
        //window.location.href = "/home";
        <HTMLDocument><unknown>document.getElementById("checkout-close-button")?.click();
        
        this.seatList.clear();
        this.ngOnInit();
        this.load();
        
      }
      
    }
        ));
  }
  refresh(){
    this.ngOnInit();
    this.load();
  }
}
