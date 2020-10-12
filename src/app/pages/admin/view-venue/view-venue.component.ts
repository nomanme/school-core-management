import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-venue',
  templateUrl: './view-venue.component.html',
  styleUrls: ['./view-venue.component.css']
})
export class ViewVenueComponent implements OnInit {

  venueId;
  venues;
  venue;

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.venueId= this.activatedRoute.snapshot.paramMap.get('id');
    
    this.apiService.getAPI(`dev/venue?venueId=${this.venueId}`).subscribe((data)=>{
      console.log(data);
      this.venues=data;
    })

    
  }


}
