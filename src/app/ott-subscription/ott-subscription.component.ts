import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
declare var bootbox: any;
@Component({
  selector: 'app-ott-subscription',
  templateUrl: './ott-subscription.component.html',
  styleUrls: ['./ott-subscription.component.css']
})
export class OttSubscriptionComponent implements OnInit {
  redirect!: string;
  customerId = JSON.parse(localStorage.getItem('user') || '{}').CustomerId;
  form!: FormGroup;
  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    var str = localStorage.getItem('user');
    if(str==null)
    {
        this.router.navigate(['/login/user']);
        return;
    }
    this.form = this.formBuilder.group({
      CustomerId: [''],
      Plan: [''],
      Price: [''],
    });
    this.route.queryParams.subscribe(params => { this.redirect = params['redirectURL'] });
    console.log(this.redirect);
    if (this.redirect.length != 0) {
      alert("Please subscribe to continue watching OTT");
    }
  }


  select(id: number) {
    if (id == 1) {
      if (confirm("You selected the Basic Plan. Are you sure to purchase?")) {
        this.form.value.CustomerId = this.customerId;
        this.form.value.Plan = "Basic";
        this.form.value.Price = 399;
        var res;
        this.user.purchaseSubscription(this.form.value)
          .pipe(first())
          .subscribe((c => {
            if (c.SubscriptionId == null) {
              bootbox.alert(c.error.toString());
            }
            else {
              //this.user.loggedIn(c);
              //window.location.href = "/home";
              //alert("Screen Created");
              bootbox.alert("Basic Plan Purchased");
              if (this.redirect != null) {
                this.router.navigate([this.redirect]);
                return;
              }
            }

          }
          ));
        console.log(res);
      }
    }
    else if (id == 2) {
      if (confirm("You selected the Standard Plan. Are you sure to purchase?")) {
        this.form.value.CustomerId = this.customerId;
        this.form.value.Plan = "Standard";
        this.form.value.Price = 2125;
        var res;
        this.user.purchaseSubscription(this.form.value)
          .pipe(first())
          .subscribe((c => {
            if (c.SubscriptionId == null) {
              bootbox.alert(c.error.toString());
            }
            else {
              //this.user.loggedIn(c);
              //window.location.href = "/home";
              //alert("Screen Created");
              bootbox.alert("Standard Plan Purchased");
              if (this.redirect != null) {
                this.router.navigate([this.redirect]);
                return;
              }
            }

          }
          ));
      }
    }
    else if (id == 3) {
      if (confirm("You selected the Premium Plan. Are you sure to purchase?")) {
        this.form.value.CustomerId = this.customerId;
        this.form.value.Plan = "Premium";
        this.form.value.Price = 4000;
        var res;
        this.user.purchaseSubscription(this.form.value)
          .pipe(first())
          .subscribe((c => {
            if (c.SubscriptionId == null) {
              bootbox.alert(c.error.toString());
            }
            else {
              //this.user.loggedIn(c);
              //window.location.href = "/home";
              //alert("Screen Created");
              bootbox.alert("Premium Plan Purchased");
              if (this.redirect != null) {
                this.router.navigate([this.redirect]);
                return;
              }
            }

          }
          ));
      }
    }
  }
}

