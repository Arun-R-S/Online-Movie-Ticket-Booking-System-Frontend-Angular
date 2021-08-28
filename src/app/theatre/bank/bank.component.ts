import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TheatreService } from 'src/app/theatre.service';
import { TheatreAdminService } from 'src/app/theatreadmin.service';
declare var bootbox :any;

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  createScreen!: FormGroup;
  errorList = <any>[];
  theatreId = JSON.parse(localStorage.getItem('user') || '{}').TheatreId;
  screenList: any;
  account:any;
  submitted = false;
  invalidRegister = false;
  accountstatus = false;
  constructor(
    private admin: TheatreAdminService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.account = this.admin.getBankAccountDetails(this.theatreId);
    
    if(this.account.BankName==null)
    {
      this.accountstatus = true;
    }
    else{
      this.accountstatus = false;
    }
    this.createScreen = this.formBuilder.group({
      TheatreId: ['', Validators.required],
      BankName: ['', Validators.required],
      AccountName: ['', Validators.required],
      AccountNo: ['', Validators.required],
      IFSCCode: ['', Validators.required],
      Email: ['', Validators.required],
      MobileNo: ['', Validators.required],
    });
  }
  new() {
    <HTMLDocument><unknown>document.getElementById("newscreen")?.click();
  }
  get f() { return this.createScreen.controls; }
  create(){
    this.createScreen.controls['TheatreId'].setValue(this.theatreId);

    if (this.createScreen.invalid) {
      this.invalidRegister = true;
      this.submitted = true;
      return;
    }
    this.admin.addBankAccount(this.createScreen.value)
      .pipe(first())
      .subscribe((c => {
        if (c.TheatreId == null) {
          bootbox.alert(c.error);

        }
        else {
          <HTMLDocument><unknown>document.getElementById("close-newmodal")?.click();
          //this.user.loggedIn(c);
          //window.location.href = "/home";
          bootbox.alert("Created");
          this.ngOnInit();
        }

      }
      ));

  }

  delete(id:number){
        var res = this.admin.deleteBankAccount(id);
        if(res.AccountsId==null)
        {
            bootbox.alert(res.error[0]);
        }
        else{
          bootbox.alert("Account Deleted");
          this.ngOnInit();
        }
        
  }
}
