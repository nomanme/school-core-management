import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  schedules;
  dataString;
  semisterId;
  termId; 
  weekId;
  startDate;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createSchedule(form){

    this.dataString=`{"scheduleId":"1","semisterId":"${form.value.semisterId}", "termId":"${form.value.termId}", "weekId":"${form.value.weekId}","startDate":"${form.value.startDate}" }`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/addschedule', this.dataString).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/timetable/list-schedule']);

    })
  }

}
