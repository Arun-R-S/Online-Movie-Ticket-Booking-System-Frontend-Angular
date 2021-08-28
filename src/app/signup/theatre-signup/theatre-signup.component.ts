import { Component, NgIterable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TheatreAdminService } from 'src/app/theatreadmin.service';

@Component({
  selector: 'app-theatre-signup',
  templateUrl: './theatre-signup.component.html',
  styleUrls: ['./theatre-signup.component.css']
})
export class TheatreSignupComponent implements OnInit {

  createAUser!: FormGroup;
  submitted = false;
  invalidRegister = false;
  errorList=<any>[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tadmin: TheatreAdminService,
    t:Title
  ) { 
    t.setTitle("Theatre Admin Signup");
  }

  ngOnInit() {
    this.createAUser = this.formBuilder.group({
      OwnerFirstName: ['', Validators.required],
      OwnerLastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Location: ['', Validators.required],
      TheatreName: ['', Validators.required],
      LicenseId: ['', Validators.required],

    });
  }
  get f() { return this.createAUser.controls; }

  onCreate(){
    if (this.createAUser.invalid) {
      this.invalidRegister=true;
      this.submitted=true;
      return;
    }
    if(document.querySelector('#agree:checked') == null)
    {

      alert("Please agree for our Terms and Conditions");
      return;
    }
    
    this.tadmin.create(this.createAUser.value)
    .pipe(first())
    .subscribe((c=>{
      console.log(c);
      this.errorList = c;
      if(c.TheatreId==null)
      {
        this.invalidRegister=true;
      }
      else{
        
        //this.user.loggedIn(c);
        //window.location.href = "/home";
        alert("Account Created");
        console.log(c);
        this.router.navigate(['/login/theatre']);
      }
      
    }
        ));
  }
}
