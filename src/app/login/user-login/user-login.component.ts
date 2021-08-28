import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  form!: FormGroup;
  submitted = false;
  invalidLogin = false;
  redirect!:string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    t:Title,
    private appc:AppComponent
  ) {
    t.setTitle("User Login");
   }

  ngOnInit() {
      
      this.form = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }
  onSubmit(){
    if (this.form.invalid) {
      this.submitted=true;
      return;
    }
    
    this.user.login(this.f.Email.value, this.f.Password.value)
    .pipe(first())
    .subscribe((c=>{
      if(c.CustomerId==null)
      {
        this.invalidLogin=true;
      }
      else{
        
        this.user.loggedIn(c); 
        this.route.queryParams.subscribe(params => {this.redirect=params['redirectURL']});
        if(this.redirect!=null)
        {
          //alert(this.redirect);
          window.location.href=this.redirect;
          return;
        } 
        window.location.href="/";
        
      }
      
    }
        ));
  }
}
