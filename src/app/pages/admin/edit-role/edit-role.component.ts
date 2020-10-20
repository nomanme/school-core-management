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
  editroles={roleName:null, roleGroup:null};

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.roleId= this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getroles?roleId=${this.roleId}`).subscribe((data)=>{
      console.log(data);
      this.editroles=data[0];
      console.log(this.editroles)
    })
  }

  editRole(form){

    console.log(form.value);
    let datajson=`{"roleName":"${form.value.roleName}", "roleGroup":"${form.value.roleGroup}"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/editroles?roleId=${this.roleId}`, datajson).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/admin/list-roles']);
    })

  }

  // delRole(form){

  //   console.log(form.value);
  //   let datajson=`{"userpassword":"${form.value.userpassword }"}`;
  //   // let datajson=`{"userpassword":"testkkk"}`;
  //   console.log(datajson);
  //   this.apiService.postAPI(`dev/deleteuser?editrole=${this.editroles}`, datajson).subscribe((data)=>{
  //   console.log(data);
  //   this.router.navigate(['/']);
  //   })

  // }



}