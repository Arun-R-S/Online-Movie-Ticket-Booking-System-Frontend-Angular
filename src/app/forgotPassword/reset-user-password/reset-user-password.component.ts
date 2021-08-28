import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
declare var bootbox:any;

@Component({
  selector: 'app-reset-user-password',
  templateUrl: './reset-user-password.component.html',
  styleUrls: ['./reset-user-password.component.css']
})
export class ResetUserPasswordComponent implements OnInit {
  
  form!:FormGroup;
  loading = false;
  submitted = false;
  paramEmail!:string;
  decode!:string;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private user : UserService,
    private router:Router,
  ) { 
    this.form = this.formBuilder.group({
      Email: ['' ],
      Password: ['',Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => { 
        this.decode = params.id;
      }
    );
    if (this.decode != null) {
      this.paramEmail = atob(this.decode);
      console.log(atob(this.decode));
    }
    
  }
  get f() { return this.form.controls; }
  onSubmit(){
    this.loading = true;
    this.form.value.Email = this.paramEmail;
    if (this.form.invalid) {

      this.submitted = true;
      this.loading = false;
      return;
    }
    this.user.forgotPassword(this.form.value)
    .pipe(first())
    .subscribe((c=>{
      if(c.error)
      {
        
        bootbox.alert(c.error[0]);
        this.loading = false;
      }
      else{
      
        bootbox.alert("Password Reset Successfull!");
        this.router.navigate(['/login/user']);
        this.loading = false;
      }
      
    }
        ));
  }
}
