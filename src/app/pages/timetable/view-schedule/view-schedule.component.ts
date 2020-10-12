import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.scheduleId= this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI('dev/schedule').subscribe((data)=>{
      // console.log(data);
      // this.students=data;
      this.schedules=this.getStudentFromList(this.scheduleId, data);
      // console.log(this.student)
    })
  }

  getStudentFromList(id, data){
    // console.log(this.studentID)
    // console.log(data)
    return data.filter(x => x.scheduleId == id);
  }

}
