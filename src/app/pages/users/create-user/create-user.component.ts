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
  email = '';
  // password;
  userpassword = '';

  error0: string = '';
  error1: string = '';

  errors;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  createUser(form) {
    if (form.value.email == '') {
      this.error0 = 'true';
      this.errors = 'true';
      console.log(form.value.email);
    } else {
      this.error0 = '';
      this.errors = 'false';
    }
    console.log(form.value.userpassword);

    if (form.value.userpassword == '') {
      console.log(this.error1);
      this.error1 = 'true';
      this.errors = 'true';
      console.log(form.value.userpassword);
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
