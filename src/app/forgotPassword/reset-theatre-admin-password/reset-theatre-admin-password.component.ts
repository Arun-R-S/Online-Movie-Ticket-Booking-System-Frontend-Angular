import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TheatreAdminService } from 'src/app/theatreadmin.service';
import { UserService } from 'src/app/user.service';
declare var bootbox:any;

@Component({
  selector: 'app-reset-theatre-admin-password',
  templateUrl: './reset-theatre-admin-password.component.html',
  styleUrls: ['./reset-theatre-admin-password.component.css']
})
export class ResetTheatreAdminPasswordComponent implements OnInit {

  form!:FormGroup;
  loading = false;
  submitted = false;
  paramEmail!:string;
  decode!:string;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private user : TheatreAdminService,
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
        this.router.navigate(['/login/theatre']);
        this.loading = false;
      }
      
    }
        ));
  }

}
