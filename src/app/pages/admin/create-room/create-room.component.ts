import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent implements OnInit {
  getvenue;

  venuerooms;
  dataString;
  roomName = "";
  roomNumber = "";
  venueId = "";

  error0 = '';
  error1 = '';

  errors = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.apiService.getAPI('dev/getvenue').subscribe((data) => {
      this.getvenue = data;
    });

  }

  createRoom(form) {
    if (form.value.venueId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }


    if (this.errors != 'true') {
      // console.log(form.value);
      this.dataString = `{"venueId":"${form.value.venueId}", "roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}"}`;
      console.log(this.dataString);

      this.apiService.postAPI('dev/addvenueroom', this.dataString).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin/list-venueroom']);
      });
    }
    else {
      console.log('submit the form');
    }
  }
}
