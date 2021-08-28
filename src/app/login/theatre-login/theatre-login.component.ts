import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TheatreAdminService } from 'src/app/theatreadmin.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-theatre-login',
  templateUrl: './theatre-login.component.html',
  styleUrls: ['./theatre-login.component.css']
})
export class TheatreLoginComponent implements OnInit {

  taLoginform!: FormGroup;
  submitted = false;
  invalidLogin=false;
  redirect!:string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private theatreAdmin: TheatreAdminService,
    t:Title
  ) { 
    t.setTitle("Theatre Admin Login");
  }

  ngOnInit() {
    this.taLoginform = this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required]
  });
}
get f() { return this.taLoginform.controls; }
onSubmit(){
  if (this.taLoginform.invalid) {
  
    this.submitted=true;
    return;
  }
  
  this.theatreAdmin.login(this.f.Email.value, this.f.Password.value)
  .pipe(first())
  .subscribe((c=>{
    if(c.Email==null)
    {
      this.invalidLogin=true;
    }
    console.log(c);
    if(c.ApprovedStatus!=true)
    {
      alert("Your Account is not activated! It is under verification");
      return;
    }
    else{
      
      this.theatreAdmin.loggedIn(c);  
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
