import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TheatreService } from 'src/app/theatre.service';

declare var bootbox: any;

@Component({
  selector: 'app-my-screens',
  templateUrl: './my-screens.component.html',
  styleUrls: ['./my-screens.component.css']
})
export class MyScreensComponent implements OnInit {
  del:any;
  createScreen!: FormGroup;
  errorList = <any>[];
  theatreId = JSON.parse(localStorage.getItem('user') || '{}').TheatreId;
  screenList: any;

  submitted = false;
  invalidRegister = false;
  constructor(
    private screen: TheatreService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    
  }

  ngOnInit(): void {
    this.screenList = this.screen.getScreenDetails(this.theatreId);
    this.createScreen = this.formBuilder.group({
      ScreenNumber: ['', Validators.required],
      TotalRow: ['', Validators.required],
      TotalColumn: ['', Validators.required],
      TheatreId: ['', Validators.required],
    });
  }
  get f() { return this.createScreen.controls; }

  edit(id: number, row: number, col: number) {
    <HTMLDocument><unknown>document.getElementById("editbutton")?.click();

    $("#screen-number").val(id);
    $("#total-row").val(row);
    $("#total-column").val(col);

  }
  
  delete(id: number) {

    if(confirm("Are you sure to delete screen number "+id)){
      this.del = this.screen.deleteScreen(this.theatreId,id);
      if(this.del.SeatingId==null)
      {
        console.log(this.del.error);
      }
      else{
        this.ngOnInit();
      }
    }
    
  }
  deleted(){
    console.log("Yes");
  }
  save() {
    var sid = $("#screen-number").val();
    var tr = $("#total-row").val();
    var tc = $("#total-column").val();
    var res:any = this.screen.updateScreen(this.theatreId,Number(sid),Number(tr),Number(tc));
    console.log(res);
    if(res.error!=null)
    {
      alert(res.error);
    }
    else{
      <HTMLDocument><unknown>document.getElementById("update-close-button")?.click();
      this.ngOnInit();
    }
  }
  new() {
    <HTMLDocument><unknown>document.getElementById("newscreen")?.click();

  }
  create() {
    this.createScreen.controls['TheatreId'].setValue(this.theatreId);
    if (this.createScreen.invalid) {
      this.invalidRegister = true;
      this.submitted = true;
      return;
    }

    this.screen.createScreen(this.createScreen.value)
      .pipe(first())
      .subscribe((c => {

        this.errorList = c;
        if (c.ScreenNumber == null) {
          alert(c.error);
          console.log(c);
        }
        else {
          <HTMLDocument><unknown>document.getElementById("close-newmodal")?.click();
          //this.user.loggedIn(c);
          //window.location.href = "/home";
          //alert("Screen Created");
          console.log(c);
          this.ngOnInit();
        }

      }
      ));
  }
}
