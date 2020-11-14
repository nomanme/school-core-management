import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css'],
})
export class EditScheduleComponent implements OnInit {
  scheduleId;
  schedule = {
    semisterId: '',
    termId: '',
    weekId: '',
    startDate: '',
  };

  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  error4 = '';

  errors = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.scheduleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService
      .getAPI(`dev/getschedule?scheduleId=${this.scheduleId}`)
      .subscribe((data) => {
        console.log(data);
        this.schedule = data[0];
        console.log(this.schedule);
      });
  }

  editSchedule(form) {
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

    console.log(form.value);

    if (this.errors != 'true') {
      let datajson = `{"scheduleId":"1","semisterId":"${form.value.semisterId}", "termId":"${form.value.termId}", "weekId":"${form.value.weekId}","startDate":"${form.value.startDate}" }`;
      console.log(datajson);
      this.apiService
        .postAPI(`dev/editschedule?scheduleId=${this.scheduleId}`, datajson)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/timetable/list-schedule']);
        });
    } else {
      ('there is error');
    }
  }
}
