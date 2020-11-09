import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent implements OnInit {
  venuerooms;
  dataString;
  roomName;
  roomNumber;
  venueId;

<<<<<<< HEAD
  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  error4 = '';
  error5 = '';
  error6 = '';
  error7 = '';
  error8 = '';

  errors = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  createRoom(form) {
    if (form.value.venueId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (form.value.roomName == '') {
      this.error2 = 'true';
      this.errors = 'true';
    } else {
      this.error2 = '';
      this.errors = 'false';
    }

    if (form.value.roomNumber == '') {
      this.error3 = 'true';
      this.errors = 'true';
    } else {
      this.error3 = '';
      this.errors = 'false';
    }

    if (form.value.roomNumber == '') {
      this.error3 = 'true';
      this.errors = 'true';
    } else {
      this.error3 = '';
      this.errors = 'false';
    }

    if (this.errors != 'true') {
      // console.log(form.value);
      this.dataString = `{"venueroomId":"1","roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}", "venueId":"${form.value.venueId}"}`;
      // this.dataString=`{"roomNumber":517,"roomName":"roomnumber2","venueId":1}`;
      console.log(this.dataString);
      this.apiService
        .postAPI('dev/addvenueroom', this.dataString)
        .subscribe((data) => {
          console.log(data);
          //  this.router.navigate(['/admin/list-venueroom']);
        });
    } else {
      console.log('submit the form');
    }
=======

  error0='';
  error1='';
  error2='';
  error3='';
  error4='';
  error5='';
  error6='';
  error7='';
  error8='';

  errors='';


  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createRoom(form){ 
 

// <<<<<<< HEAD
//     // if(form.value.venueId ==''){
// =======
      if(form.value.venueId ==''){
// >>>>>>> 5171fb5077006734ec04e2d16ede2f1424ce8b2b
      this.error1 ='true'; 
      this.errors='true';
     
    }
    else{
      this.error1 ='';
      this.errors='false';
    }

// <<<<<<< HEAD
// =======

// >>>>>>> 5171fb5077006734ec04e2d16ede2f1424ce8b2b
    if(form.value.roomName ==''){
      this.error2 ='true'; 
      this.errors='true';
     
    }
    else{
      this.error2 ='';
      this.errors='false';
// <<<<<<< HEAD
//     }
// =======
     
//     }

//     if(form.value.roomNumber ==''){
//       this.error3 ='true'; 
//       this.errors='true';
     
//     }
//     else{
//       this.error3 ='';
//       this.errors='false';
     
//     }

//      if(form.value.roomNumber ==''){
//       this.error3 ='true'; 
//       this.errors='true';
     
//     }
//     else{
//       this.error3 ='';
//       this.errors='false';
     
//     }

//     if (this.errors != 'true'){
// >>>>>>> 5171fb5077006734ec04e2d16ede2f1424ce8b2b

    if(form.value.roomNumber ==''){
      this.error3 ='true'; 
      this.errors='true';
     
    }
    else{
      this.error3 ='';
      this.errors='false';
    }

    if (this.errors != 'true'){
 
    this.dataString=`{"venueroomId":"1","roomName":"${form.value.roomName}", "roomNumber":"${form.value.roomNumber}", "venueId":"${form.value.venueId}"}`;
    // this.dataString=`{"roomNumber":517,"roomName":"roomnumber2","venueId":1}`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/addvenueroom', this.dataString).subscribe((data)=>{
      console.log(data);
      //  this.router.navigate(['/admin/list-venueroom']); 
    })

  }

   else{
    console.log('submit the form')
  }

>>>>>>> 69cb1f69007d53c66e72ce3d56d809d2e969d4d3
  }
}
