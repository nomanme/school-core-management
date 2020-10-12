import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {

  venueId;
  venue;

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.venueId= this.activatedRoute.snapshot.paramMap.get('id');

// `dev/user?userId=${}`

    this.apiService.getAPI(`dev/venue?venueId=${this.venueId}`).subscribe((data)=>{
      console.log(data);
      this.venue=data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.venue)
    })
  }

  editVenue(form){

    console.log(form.value);
    let datajson=`{"venueId":"1","roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}", "venueId":"${form.value.venueId}"}`;
    console.log(datajson);
    this.apiService.putAPI(`dev/venue?venueId=${this.venueId}`, datajson).subscribe((data)=>{
      console.log(data);
      // this.router.navigate(['/admin/list-venueroom']);
    })

}

}
