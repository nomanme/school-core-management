import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userId;
  users;
  user;

  
  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId= this.activatedRoute.snapshot.paramMap.get('id');

    // this.apiService.getAPI('dev/user').subscribe((data)=>{
    //   // console.log(data);
    //   // this.students=data;
    //   this.users=this.getStudentFromList(this.userId, data);
    //   // console.log(this.student)
    // })

    
    this.apiService.getAPI(`dev/user?userId=${this.userId}`).subscribe((data)=>{
      console.log(data);
      // this.students=data;
      this.users=data;
      // console.log(this.student)
    })

    
  }

  // getStudentFromList(id, data){
  //   // console.log(this.studentID)
  //   // console.log(data)
  //   return data.filter(x => x.userId == id);
  // }

}
