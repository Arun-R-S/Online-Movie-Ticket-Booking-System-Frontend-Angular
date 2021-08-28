import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { APIUrl } from 'src/app/APIURL';
import { TheatreAdminService } from 'src/app/theatreadmin.service';
import { UserService } from 'src/app/user.service';
declare var bootbox:any;

@Component({
  selector: 'app-theatre-admin-forgot',
  templateUrl: './theatre-admin-forgot.component.html',
  styleUrls: ['./theatre-admin-forgot.component.css']
})
export class TheatreAdminForgotComponent implements OnInit {
  form!: FormGroup;
  paramEmail!: string;
  submitted = false;
  loading = false;
  reset = false;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private user : TheatreAdminService,
  ) {
    this.form = this.formBuilder.group({
      Email: ['', Validators.required],
      Body: ['',],
      Subject: ['',],
    });

  }

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.loading = true;
    this.form.value.Body="Please click the below link to reset your password "+window.location.origin+"/forgotPassword/resetTheatreAdminPassword?id="+btoa(this.form.value.Email);
    this.form.value.Subject = "[Action] Password Reset";
    if (this.form.invalid) {

      this.submitted = true;
      this.loading = false;
      return;
    }
    this.user.sendMail(this.form.value)
    .pipe(first())
    .subscribe((c=>{
      if(c.error)
      {
        
        bootbox.alert(c.error[0]);
        this.loading = false;
      }
      else{
      
        bootbox.alert("Resend link send to Mail Id");
        this.loading = false;
      }
      
    }
        ));
        
  }
}
