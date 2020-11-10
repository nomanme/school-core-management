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
    this.venueroomId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/venueroom?venueroomId=${this.venueroomId}`).subscribe((data) => {
        console.log(data);
        this.venuerooms = data;
      });
  } 
}
