import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MoviesService } from 'src/app/movies.service';
import { TheatreService } from 'src/app/theatre.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.css']
})
export class NewScheduleComponent implements OnInit {
  createSchedule!:FormGroup
  submitted = false;
  invalidRegister = false;
  errorList = <any>[];
  movieName:any;
  screenNumber:any;
  theatreId=JSON.parse(localStorage.getItem('user') || '{}').TheatreId;
  constructor(
    private movie:MoviesService,
    private theatre:TheatreService,
    private formBuilder: FormBuilder,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.movieName=this.movie.getAllMovieName();
    this.screenNumber=this.theatre.getAllScreenNumber(this.theatreId);
    this.createSchedule = this.formBuilder.group({
      MovieId:[''],
      TheatreId:['',Validators.required],
      ScreenNumber: ['', Validators.required],
      MovieName: ['', Validators.required],
      ShowDate: ['', Validators.required],
      ShowTime: ['', Validators.required],  
      TicketPrice: ['', Validators.required],
    });
  }
  get f() { return this.createSchedule.controls; }
  submit(){
    this.createSchedule.controls['TheatreId'].setValue(this.theatreId);
    try{
      var r = this.movieName.find((x: { MovieName: string; }) => x.MovieName == this.createSchedule.controls['MovieName'].value);
      this.createSchedule.controls['MovieId'].setValue(r.MovieId);
     
    }
    catch{

    }
    
    //this.createSchedule.controls['MovieId'].setValue(this.movieName[])
    if (this.createSchedule.invalid) {
      this.invalidRegister = true;
      this.submitted = true;
      return;
    }
    else{
      this.theatre.createNewSchedule(this.createSchedule.value)
      .pipe(first())
      .subscribe(((c: { ScreenNumber: null; error: any; }) => {

        this.errorList = c;
        if (c.ScreenNumber == null) {
          alert(c.error);
          
        }
        else {
          
          
          window.history.back();
        }

      }
      ));
    }
    
  }
}
