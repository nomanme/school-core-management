import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData;
  user=`{"roleId":"1","email":"raisdhaka4@gmail.com", "userpassword":"abcdefghijk"}`
  data={roleName:'testRole', roleGroup:2}
  constructor(private apiService:ApiService ) { }

  ngOnInit(): void {
    // this.apiService.getUser().subscribe((data)=>{
    //   this.userData=data;
    //   console.log(this.userData);
    // });

    // this.apiService.postRole('dev/roles', this.data).subscribe((data)=>{
    //   data;
    //   console.log(data);
    // });

    // this.apiService.postRole('dev/roles', this.data).subscribe((data)=>{
    //   data;
    //   console.log(data);
    // });
    console.log(this.user)

    // this.apiService.postAPI('dev/user', this.user).subscribe((data)=>{
    //   console.log(data);
    // });
    
  }

}
