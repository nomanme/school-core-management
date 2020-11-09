import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css'],
})
export class EditVenueComponent implements OnInit {
  getstate;
  getcountry;
  gettrainingOrg;

  venueId;
  venue;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getAPI3('dev/getstate').subscribe((data) => {
      this.getstate = data;
    });

    this.apiService.getAPI3('dev/getcountry').subscribe((data) => {
      this.getcountry = data;
    });

    this.apiService.getAPI('dev/gettrainingOrg').subscribe((data) => {
      this.gettrainingOrg = data;
    });

    this.venueId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService
      .getAPI(`dev/getvenue?venueId=${this.venueId}`)
      .subscribe((data) => {
        console.log(data);
        this.venue = data[0];
        console.log(this.venue);
      });
  }

  editVenue(form) {
    console.log(form.value);
    let datajson = `{"venueId":"1","roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}", "venueId":"${form.value.venueId}"}`;
    console.log(datajson);
    this.apiService
      .postAPI(`dev/editvenue?venueId=${this.venueId}`, datajson)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin/list-venueroom']);
      });
  }
}
