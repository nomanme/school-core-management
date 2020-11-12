import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css'],
})
export class EditUsersComponent implements OnInit {
  userId;
  edituser = {
    email: '',
    dateCreated: '',
    roleId: '',
    userId: '',
    userpassword: '',
  };

  allerrors = '';

  error0;
  error1;
  error2;
  error3;
  error4;
  error5;
  error6;

  errors;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    // `dev/user?userId=${}`

    this.apiService
      .getAPI(`dev/getuser?userId=${this.userId}`)
      .subscribe((data) => {
        console.log(data);
        this.edituser = data[0];
        // this.student=this.getStudentFromList(this.studentID, data);
        console.log(this.edituser);
      });
  }

  updateUser(form) {
    if (form.value.roleId == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.email == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (form.value.userpassword == '') {
      this.error2 = 'true';
      this.errors = 'true';
    } else {
      this.error2 = '';
      this.errors = 'false';
    }

    if (this.errors != 'true') {
      console.log(form.value);
      let datajson = `{"userpassword":"${form.value.userpassword}"}`;
      // let datajson=`{"userpassword":"testkkk"}`;
      console.log(datajson);
      this.apiService
        .postAPI(`dev/edituser?userId=${this.userId}`, datajson)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/users/manage-user-account']);
        });
    } else {
      ('this is error');
    }
  }

  delUser(form) {
    if (this.errors != 'true') {
      console.log(form.value);
      let datajson = `{"userpassword":"${form.value.userpassword}"}`;
      // let datajson=`{"userpassword":"testkkk"}`;
      console.log(datajson);
      this.apiService
        .postAPI(`dev/deleteuser?userId=${this.userId}`, datajson)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/users/manage-user-account']);
        });
    }
  }
}
