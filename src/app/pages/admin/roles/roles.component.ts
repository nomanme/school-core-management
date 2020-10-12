import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  role;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {

    this.apiService.getUser('dev/roles').subscribe((data)=>{
      console.log(data);
      this.role=data;
    })
  }

}
