import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/admin.service';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  invalidLogin=false;
  redirect!:string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private admin:AdminService,
    t:Title,
    private user:UserService,
    private appc:AppComponent
  ) { 
    t.setTitle("Theatre Login");
    this.form = this.formBuilder.group({
      AdminId: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }
  onSubmit(){
    console.log(this.form.value);
    if (this.form.invalid) {
    
      this.submitted=true;
      return;
    }

    this.admin.login(this.f.AdminId.value, this.f.Password.value)
    .pipe(first())
    .subscribe((c=>{
      if(c.AdminId==null)
      {
        this.invalidLogin=true;
        
      }
      else{
        
        this.user.loggedIn(c); 
        console.log(c);
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
