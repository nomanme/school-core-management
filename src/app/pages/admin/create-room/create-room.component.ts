import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  venuerooms;
  dataString;
  roomName:null;
  roomNumber:1; 
  venueId;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createRoom(form){ 

    // console.log(form.value);
    this.dataString=`{"venueroomId":"1","roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}", "venueId":"${form.value.venueId}"}`;
    // this.dataString=`{"roomNumber":517,"roomName":"roomnumber2","venueId":1}`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/venueroom', this.dataString).subscribe((data)=>{
      console.log(data);
      //  this.router.navigate(['/admin/list-venueroom']); 
    })
  }
 

}
