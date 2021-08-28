import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TheatreService } from 'src/app/theatre.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  scheduleList:any;
  theatreId=JSON.parse(localStorage.getItem('user') || '{}').TheatreId;
  constructor(
    private schedule:TheatreService,
    t:Title
  ) { 
    t.setTitle("My Schedule");
  }

  ngOnInit(): void {
    
    this.scheduleList = this.schedule.getTodaySchedule(this.theatreId);
    
  }
  new() {
    <HTMLDocument><unknown>document.getElementById("newscreen")?.click();

  }
  edit(id:number){}
  delete(id:number){}
}
