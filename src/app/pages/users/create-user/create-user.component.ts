import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  users;
  dataString;
  email;
  password;

  allerrors = '';

  error0;
  error1;
  error2;
  error3;

  errors;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  createUser(form) {
    if (form.value.email == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.password == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (this.errors != 'true') {
      this.dataString = `{"roleId":"1","email":"${form.value.email}", "userpassword":"${form.value.userpassword}"}`;

      console.log(this.dataString);
      this.apiService
        .postAPI('dev/adduser', this.dataString)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/users/manage-user-account']);
        });
    } else {
      console.log('There is error');
    }
  }
}
