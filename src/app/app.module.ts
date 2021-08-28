import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { OttComponent } from './ott/ott.component';
import { MoviesComponent } from './movies/movies.component';
import { MovielistComponent } from './home/movielist/movielist.component';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';


import { UserLoginComponent } from './login/user-login/user-login.component';
import { TheatreLoginComponent } from './login/theatre-login/theatre-login.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { TheatreSignupComponent } from './signup/theatre-signup/theatre-signup.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { APIUrl } from './APIURL';
import { DatePipe } from '@angular/common';
import { WatchComponent } from './ott/watch/watch.component';
import { SafePipe } from './safe.pipe';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectSeatsComponent } from './book-tickets/select-seats/select-seats.component';
import { TheatreComponent } from './theatre/theatre.component';
import { OverviewComponent } from './theatre/overview/overview.component';
import { MyScreensComponent } from './theatre/my-screens/my-screens.component';
import { SchedulesComponent } from './theatre/schedules/schedules.component';
import { ViewBookingsComponent } from './theatre/view-bookings/view-bookings.component';
import { NewScheduleComponent } from './theatre/new-schedule/new-schedule.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewTheatreAdminRequestComponent } from './admin-dashboard/view-theatre-admin-request/view-theatre-admin-request.component';
import { SoldTicketsComponent } from './theatre/sold-tickets/sold-tickets.component';
import { UserForgotComponent } from './forgotPassword/user-forgot/user-forgot.component';
import { TheatreAdminForgotComponent } from './forgotPassword/theatre-admin-forgot/theatre-admin-forgot.component';
import { ResetUserPasswordComponent } from './forgotPassword/reset-user-password/reset-user-password.component';
import { ResetTheatreAdminPasswordComponent } from './forgotPassword/reset-theatre-admin-password/reset-theatre-admin-password.component';
import { BankComponent } from './theatre/bank/bank.component';
import { OttSubscriptionComponent } from './ott-subscription/ott-subscription.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OttComponent,
    MoviesComponent,
    HomeComponent,
    MovielistComponent,
    UserLoginComponent,
    UserLoginComponent,
    UserSignupComponent,
    TheatreSignupComponent,
    AdminLoginComponent,
    TheatreLoginComponent,
    WatchComponent,
    SafePipe,
    AllMoviesComponent,
    BookTicketsComponent,
    PageNotFoundComponent,
    SelectSeatsComponent,
    TheatreComponent,
    OverviewComponent,
    MyScreensComponent,
    SchedulesComponent,
    ViewBookingsComponent,
    NewScheduleComponent,
    AdminComponent,
    AdminDashboardComponent,
    ViewTheatreAdminRequestComponent,
    SoldTicketsComponent,
    UserForgotComponent,
    TheatreAdminForgotComponent,
    ResetUserPasswordComponent,
    ResetTheatreAdminPasswordComponent,
    BankComponent,
    OttSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [APIUrl,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
