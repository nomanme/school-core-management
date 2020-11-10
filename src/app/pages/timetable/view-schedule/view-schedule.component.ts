import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit { 

  scheduleId;
  schedules;
  schedule;
  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.scheduleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getschedule?scheduleId=${this.scheduleId}`).subscribe((data) => {
        console.log(data);
        this.schedules = data;
      });
  }

}
