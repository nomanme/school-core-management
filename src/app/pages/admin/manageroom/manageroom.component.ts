import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.css']
})
export class ManageroomComponent implements OnInit {
  venuerooms;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {

    this.apiService.getUser('dev/venueroom').subscribe((data)=>{
      console.log(data);
      this.venuerooms=data;
    })
  }

}
