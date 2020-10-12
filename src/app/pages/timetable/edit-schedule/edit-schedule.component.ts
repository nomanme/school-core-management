import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  scheduleId;
  schedule;

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.scheduleId= this.activatedRoute.snapshot.paramMap.get('id');

// `dev/user?userId=${}`

    this.apiService.getAPI(`dev/schedule?scheduleId=${this.scheduleId}`).subscribe((data)=>{
      console.log(data);
      this.schedule=data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.schedule)
    })
  }

  editSchedule(form){

    console.log(form.value);
    let datajson=`{"scheduleId":"1","semisterId":"${form.value.semisterId}", "termId":"${form.value.termId}", "weekId":"${form.value.weekId}","startDate":"${form.value.startDate}" }`;
    console.log(datajson);
    this.apiService.putAPI(`dev/schedule?scheduleId=${this.scheduleId}`, datajson).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/timetable/list-schedule']);
    })

  }

}
