import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css'],
})
export class EditRoomComponent implements OnInit {

  getvenue;


  venueroomId;
  venueroom;
  venueId;

  error1 = '';
  errors = '';

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.apiService.getAPI('dev/getvenue').subscribe((data) => {
      this.getvenue = data;
    });

    this.venueroomId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService
      .getAPI(`dev/getvenueroom?venueroomId=${this.venueroomId}`)
      .subscribe((data) => {
        console.log(data);
        this.venueroom = data[0];
        console.log(this.venueroom);
      });
  }

  editRoom(form) {

    if (form.value.venueId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }
    if (this.errors != 'true') {
      console.log(form.value);
      let datajson = `{"roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}", "venueId":"${form.value.venueId}"}`;
      console.log(datajson);
      this.apiService.postAPI(`dev/editvenueroom?venueroomId=${this.venueroomId}`, datajson).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin/list-venueroom']);
      });
    }

    else {
      console.log('submit the form');
    }

  }
}
