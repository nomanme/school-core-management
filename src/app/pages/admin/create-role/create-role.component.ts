import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  dataString;
  roleId: null;
  roleName: null;
  roleGroup: null;  

  constructor(private apiService: ApiService, private router:Router) { }
  ngOnInit(): void {
    
  }

  createRole(form){

    this.dataString=`{"roleId":"${form.value.roleId}", "roleName":"${form.value.roleName}", "roleGroup":"${form.value.roleGroup}"}`;
    
    console.log(this.dataString);
    this.apiService.postAPI('dev/addroles', this.dataString).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/admin/list-roles']);

    })
  }
  

}
