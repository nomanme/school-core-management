import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  users;
  dataString;

  email:null;
  password:null; 
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createUser(form){

    this.dataString=`{"roleId":"1","email":"${form.value.email}", "userpassword":"${form.value.password}"}`;
    
    console.log(this.dataString);
    this.apiService.postAPI('dev/user', this.dataString).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/users/manage-user-account']);

    })
  }
 

}
