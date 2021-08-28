import { Component, NgIterable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  createUser!: FormGroup;
  submitted = false;
  invalidRegister = false;
  errorList=<any>[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    t:Title,
  ) { 
    t.setTitle("User Signup");
    
    
  }

  ngOnInit() {

    

    this.createUser = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      MobileNo: ['', Validators.required]
    });
  }
  
  get f() { return this.createUser.controls; }
  isNumber(val:any): boolean { return typeof val == "string" ; }
  onCreate(){
    if (this.createUser.invalid) {
      this.invalidRegister=true;
      this.submitted=true;
      return;
    }
    if(document.querySelector('#agree:checked') == null)
    {

      alert("Please agree for our Terms and Conditions");
      return;
    }
    
    this.user.create(this.createUser.value)
    .pipe(first())
    .subscribe((c=>{

      this.errorList = c;
      if(c.CustomerId==null)
      {
        this.invalidRegister=true;
      }
      else{
        
        //this.user.loggedIn(c);
        //window.location.href = "/home";
        alert("Account Created");
        console.log(c);
        this.router.navigate(['/login/user']);
      }
      
    }
        ));
  }
}
