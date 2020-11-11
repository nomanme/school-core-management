import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Users:User[];
  selectedUser:User={email:null, userpassword:null }
  errorMessage={message:null};

  email;
  userpassword;

  body;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.body = document.getElementsByTagName('body')[0];
    this.body.classList.add('only_content');

    if ( this.isLoggedIn() ) {
      this.router.navigate(['']);
      this.body.classList.remove('only_content');
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  logIn(form) {
    console.log(form.value);
    let datajson = `{"email":"${form.value.uname}", "userpassword":"${form.value.psw}"}`;
    console.log(datajson);
    this.apiService.getAPI3(`dev/getlogin?email=${this.email}&userpassword=${this.userpassword}`).subscribe((user: User) => {
      // console.log(data);
      if(user['msg']==true){
        // console.log('true');
        this.errorMessage.message='';
        console.log("User loggedin, ", user);

        this.setToken(
          this.email,
          this.email
        );
        
        this.router.navigate(['']);
        this.body.classList.remove('only_content');
      }
      if(user['msg']==false){
        // console.log('false');
        this.errorMessage.message='pls check username & password or if user is active';
        console.log('pls check username & password or if user is active');
      }
    });
  }

  setToken(token: string, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }


}
