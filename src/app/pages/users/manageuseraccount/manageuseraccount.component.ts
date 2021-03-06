import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
 
@Component({
  selector: 'app-manageuseraccount',
  templateUrl: './manageuseraccount.component.html',
  styleUrls: ['./manageuseraccount.component.css'],
})
export class ManageuseraccountComponent implements OnInit {
  users;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getUser('dev/getuser').subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
