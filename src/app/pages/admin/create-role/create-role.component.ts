import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  role;
  dataString;
  roleName;
  roleGroup; 
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createRole(form){

    this.dataString=`{"roleId":"1","roleName":"${form.value.roleName}", "roleGroup":"${form.value.roleGroup}"}`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/roles', this.dataString).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/admin/list-role']);

    })
  }
 

}
