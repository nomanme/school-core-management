import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  scheduleId;
  schedule = {
    semisterId: null,
    termId: null,
    weekId: null,
    startDate: null,
  };

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.scheduleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getschedule?scheduleId=${this.scheduleId}`).subscribe((data) => {
      console.log(data);
      this.schedule = data[0];
      console.log(this.schedule)
    });
  }

  editSchedule(form) {

    console.log(form.value);
    let datajson = `{"scheduleId":"1","semisterId":"${form.value.semisterId}", "termId":"${form.value.termId}", "weekId":"${form.value.weekId}","startDate":"${form.value.startDate}" }`;
    console.log(datajson);
    this.apiService.postAPI(`dev/editschedule?scheduleId=${this.scheduleId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/timetable/list-schedule']);
    });

  }

}
