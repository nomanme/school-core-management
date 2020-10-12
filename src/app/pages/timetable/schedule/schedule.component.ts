import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {

    this.apiService.getUser('dev/schedule').subscribe((data)=>{
      console.log(data);
      this.schedules=data;
    })
  }
}
