import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css'],
})
export class ViewRoomComponent implements OnInit {
  venueroomId;
  venuerooms;
  venueroom;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.venueroomId = this.activatedRoute.snapshot.paramMap.get('id');
=======
    this.venueroomId= this.activatedRoute.snapshot.paramMap.get('id');
    
    this.apiService.getAPI(`dev/getvenueroom?venueroomId=${this.venueroomId}`).subscribe((data)=>{
      console.log(data);
      this.venuerooms=data;
    })
    
  }
>>>>>>> 69cb1f69007d53c66e72ce3d56d809d2e969d4d3

    this.apiService
      .getAPI(`dev/venueroom?venueroomId=${this.venueroomId}`)
      .subscribe((data) => {
        console.log(data);
        this.venuerooms = data;
      });
  }
}
