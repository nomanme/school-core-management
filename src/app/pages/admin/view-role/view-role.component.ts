import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  roleId;
  roles;
  role;
  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.roleId= this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI('dev/roles').subscribe((data)=>{
      // console.log(data);
      // this.students=data;
      this.roles=this.getStudentFromList(this.roleId, data);
      // console.log(this.student)
    })
  }

  getStudentFromList(id, data){
    // console.log(this.studentID)
    // console.log(data)
    return data.filter(x => x.roleId == id);
  }

}
