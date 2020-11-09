import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css'],
})
export class CreateRoleComponent implements OnInit {
  dataString;
  roleId;
  roleName;
  roleGroup;

  errors;
  error0;
  error1;

  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {}

  createRole(form) {
    if (form.value.roleName == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.roleName == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (this.errors != 'true') {
      this.dataString = `{"roleId":"${form.value.roleId}", "roleName":"${form.value.roleName}", "roleGroup":"${form.value.roleGroup}"}`;

      console.log(this.dataString);
      this.apiService
        .postAPI('dev/addroles', this.dataString)
        .subscribe((data) => {
          console.log(data);
          // this.router.navigate(['/admin/list-roles']);
        });
    } else {
      console.log('fill the form');
    }
  }
}
