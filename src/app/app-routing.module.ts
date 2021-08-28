import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewTheatreAdminRequestComponent } from './admin-dashboard/view-theatre-admin-request/view-theatre-admin-request.component';
import { AdminComponent } from './admin/admin.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { SelectSeatsComponent } from './book-tickets/select-seats/select-seats.component';
import { ResetTheatreAdminPasswordComponent } from './forgotPassword/reset-theatre-admin-password/reset-theatre-admin-password.component';
import { ResetUserPasswordComponent } from './forgotPassword/reset-user-password/reset-user-password.component';
import { TheatreAdminForgotComponent } from './forgotPassword/theatre-admin-forgot/theatre-admin-forgot.component';
import { UserForgotComponent } from './forgotPassword/user-forgot/user-forgot.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { TheatreLoginComponent } from './login/theatre-login/theatre-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';


import { MoviesComponent } from './movies/movies.component';
import { OttSubscriptionComponent } from './ott-subscription/ott-subscription.component';
import { OttComponent } from './ott/ott.component';
import { WatchComponent } from './ott/watch/watch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TheatreSignupComponent } from './signup/theatre-signup/theatre-signup.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { BankComponent } from './theatre/bank/bank.component';
import { MyScreensComponent } from './theatre/my-screens/my-screens.component';
import { NewScheduleComponent } from './theatre/new-schedule/new-schedule.component';
import { OverviewComponent } from './theatre/overview/overview.component';
import { SchedulesComponent } from './theatre/schedules/schedules.component';
import { SoldTicketsComponent } from './theatre/sold-tickets/sold-tickets.component';
import { TheatreComponent } from './theatre/theatre.component';
import { ViewBookingsComponent } from './theatre/view-bookings/view-bookings.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,data : {title: 'Home'} },
  {path:'ott',component:OttComponent,data : {title: 'OTT Movies'}},
  {path:'login/user',component:UserLoginComponent,data : {title: 'User Login'}},
  {path:'login/theatre',component:TheatreLoginComponent,data : {title: 'Theatre Login'}},
  {path:'login/admin',component:AdminLoginComponent,data : {title: 'Admin Login'}},
  {path:'movies/:id',component:MoviesComponent,data : {title: 'Movie Detail'}},
  {path:'signup/user',component:UserSignupComponent,data : {title: 'User SignUp'}},
  {path:'signup/theatre',component:TheatreSignupComponent,data : {title: 'Theatre Admin SignUp'}},
  {path:'ott/watch/:id',component:WatchComponent,data : {title: 'OTT Play'}},
  {path:'allmovies',component:AllMoviesComponent,data : {title: 'Movie List'}},
  {path:'bookTickets',component:BookTicketsComponent,data : {title: 'Available Bookings'}},
  {path:'bookTickets/seatSelecting/:id',component:SelectSeatsComponent,data : {title: 'Ticket Booking'}},
  {path:'admin',component:AdminComponent,data : {title: 'Admin Panel'}},
  {path:'purchase/OttPlan',component:OttSubscriptionComponent,data : {title: 'Purchase Subscription'}},
  {path:'forgotPassword/user',component:UserForgotComponent,data : {title: 'Forgot Password'}},
  {path:'forgotPassword/theatre-admin',component:TheatreAdminForgotComponent,data : {title: 'Forgot Password'}},
  {path:'forgotPassword/resetUserPassword',component:ResetUserPasswordComponent,data : {title: 'Reset Password'}},
  {path:'forgotPassword/resetTheatreAdminPassword',component:ResetTheatreAdminPasswordComponent,data : {title: 'Reset Password'}},
  {
    path:'admin/myDashboard',
    component:AdminDashboardComponent,data : {title: 'Admin Panel'},
    children:[
      {path:'',component:OverviewComponent,outlet:'side',data : {title: 'Admin Panel'}},
      {path:'viewTheatreRequest',component:ViewTheatreAdminRequestComponent,outlet:'side',data : {title: 'Admin Panel'}},
    ],
  },
  {
    path:'theatre',
    component:TheatreComponent,data : {title: 'Theatre Admin'},
    children: [
      
      {path: '', component: OverviewComponent, outlet: 'side',data : {title: 'Dashboard'}},
      {path: 'screens', component: MyScreensComponent, outlet: 'side',data : {title: 'My Screens'}},
      {path: 'schedule', component: SchedulesComponent, outlet: 'side',data : {title: 'My Schedules'}},
      {path: 'bank', component: BankComponent, outlet: 'side',data : {title: 'My Bank'}},
      
    ],
    
    
  },
  {path: 'viewBookings/:id', component:ViewBookingsComponent ,data : {title: 'View Bookings'}},
  {path: 'soldTickets/:id', component:SoldTicketsComponent ,data : {title: 'Solding Tickets'}},
  {path: 'newschedule', component: NewScheduleComponent,data : {title: 'Create Schedule'}},
  { path: '**', pathMatch: 'full',component: PageNotFoundComponent ,data : {title: '404 Error'}},
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
