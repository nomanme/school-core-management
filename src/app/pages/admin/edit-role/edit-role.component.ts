import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  roleId;
  roles;

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.roleId= this.activatedRoute.snapshot.paramMap.get('id');

// `dev/user?userId=${}`

    this.apiService.getAPI(`dev/roles?roleId=${this.roleId}`).subscribe((data)=>{
      console.log(data);
      this.roles=data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.roles)
    })
  }

  editRole(form){

    console.log(form.value);
    let datajson=`{"roleId":"1","roleName":"${form.value.roleName}", "roleGroup":"${form.value.roleGroup}"}`;
    console.log(datajson);
    this.apiService.putAPI(`dev/roles?roleId=${this.roleId}`, datajson).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/admin/list-roles']);
    })

}

}