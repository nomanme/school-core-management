import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email;
  userpassword;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('only_content');
  }

  logIn(form) {
    console.log(form.value);
    let datajson = `{"email":"${form.value.uname}", "userpassword":"${form.value.psw}"}`;
    console.log(datajson);
    this.apiService.getAPI3(`dev/getlogin?email=${this.email}&userpassword=${this.userpassword}`).subscribe((data) => {
      console.log(data);
      this.router.navigate(['home']);
    });
  }



}
