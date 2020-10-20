import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit { 

  userId;
  edituser={email:null, dateCreated:null, roleId:null, userId:null, userpassword:''};

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.userId= this.activatedRoute.snapshot.paramMap.get('id');

// `dev/user?userId=${}`

    this.apiService.getAPI(`dev/getuser?userId=${this.userId}`).subscribe((data)=>{
      console.log(data);
      this.edituser=data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.edituser)
    })
  }

  updateUser(form){

    console.log(form.value);
    let datajson=`{"userpassword":"${form.value.userpassword }"}`;
    // let datajson=`{"userpassword":"testkkk"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/edituser?userId=${this.userId}`, datajson).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/users/manage-user-account']);
    })

  }
 
  delUser(form){

    console.log(form.value);
    let datajson=`{"userpassword":"${form.value.userpassword }"}`;
    // let datajson=`{"userpassword":"testkkk"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/deleteuser?userId=${this.userId}`, datajson).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/users/manage-user-account']);
    })

  }


}
