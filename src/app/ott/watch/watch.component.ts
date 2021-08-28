import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIUrl } from 'src/app/APIURL';
import { MoviesService } from 'src/app/movies.service';
import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Title } from "@angular/platform-browser";
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  ottDetail=<any>[];
  customerId = JSON.parse(localStorage.getItem('user') || '{}').CustomerId;
  ottSubscriptionStatus:any;
  APIURL!:string;
  videoUrl!:string;
  moviedetail=<any>[];
  constructor(
    private sanitizer:DomSanitizer,
    private user : UserService,
    private movie:MoviesService,
    private router:Router,
    private api:APIUrl,
    private activatedRoute: ActivatedRoute,
    t:Title) {
     
    var str = localStorage.getItem('user');
    if(str==null)
    {
        this.router.navigate(['/login/user'],{queryParams:{'redirectURL':window.location.pathname}});
        return;
    }
    this.ottSubscriptionStatus = this.user.getSubscriptionStatus(this.customerId);
    console.log(this.ottSubscriptionStatus);
    if(this.ottSubscriptionStatus.success!=null)
    {
      
    }
    else{
      this.router.navigate(['purchase/OttPlan'],{queryParams:{'redirectURL':window.location.pathname}});
    }
    this.ottDetail= this.movie.getOttDetails(this.activatedRoute.snapshot.params.id);
    this.moviedetail= this.movie.getMovieDetails(this.activatedRoute.snapshot.params.id);
    t.setTitle("Playing-"+this.moviedetail.movie.MovieName);
    this.APIURL=api.APIURL;
    this.videoUrl= this.APIURL+'/'+this.ottDetail.VideoFile;
    console.log(this.videoUrl);
  }

  ngOnInit(): void {
    $("#videofile").prop('volume',0.2);
    $('#videofile').on('change', function() {
      console.log("Yes");
  });
  
  }
  SetVolume()
    {
        var vol = $("#vol-control").val();
        console.log(vol);
        $("#videofile").prop('volume',vol);
    }
}
