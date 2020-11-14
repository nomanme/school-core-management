import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css'],
})
export class CreateScheduleComponent implements OnInit {
  schedules;
  dataString;
  semisterId = '';
  termId = '';
  weekId = '';
  startDate;

  allerrors = '';

  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  error4 = '';
  error5 = '';

  errors = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  createSchedule(form) {
    if (form.value.semisterId == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.termId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (form.value.weekId == '') {
      this.error2 = 'true';
      this.errors = 'true';
    } else {
      this.error2 = '';
      this.errors = 'false';
    }

    // if (form.value.weekId == '') {
    //   this.error0 = 'true';
    //   this.errors = 'true';
    // } else {
    //     this.error0 = '';
    //     this.errors = 'false';
    // }

    if (this.errors != 'true') {
      this.dataString = `{"scheduleId":"1","semisterId":"${form.value.semisterId}", "termId":"${form.value.termId}", "weekId":"${form.value.weekId}","startDate":"${form.value.startDate}" }`;
      console.log(this.dataString);
      this.apiService
        .postAPI('dev/addschedule', this.dataString)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/timetable/list-schedule']);
        });
    } else {
      ('There is a error');
    }
  }
}
