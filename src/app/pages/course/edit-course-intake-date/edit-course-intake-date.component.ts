import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-course-intake-date',
  templateUrl: './edit-course-intake-date.component.html',
  styleUrls: ['./edit-course-intake-date.component.css']
})
export class EditCourseIntakeDateComponent implements OnInit {

  getcourse;
  getuser;

  editcourseintakedate;
  courseIntakeDateId;
  courseId = '';
  startDate = '';
  endDate = '';
  studentOriginIds = '';
  enrolmentFee = '';
  publish = '';
  userId = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      this.getcourse = data;
    });

    this.apiService.getAPI('dev/getuser').subscribe((data) => {
      this.getuser = data;
    });

    this.courseIntakeDateId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getAPI2(`dev/getcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`).subscribe((data) => {
      console.log(data);
      this.editcourseintakedate = data[0];
      console.log(this.editcourseintakedate);
    });
  }

  editCourseIntakeDate(form) {

    console.log(form.value);
    let datajson = `{"courseId":"${form.value.courseId}", "startDate":"${form.value.startDate}", "endDate":"${form.value.endDate}", "studentOriginIds":"${form.value.studentOriginIds}", "enrolmentFee":"${form.value.enrolmentFee}", "publish":"${form.value.publish}", "userId":"${form.value.userId}"}`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/course-intake-date-list']);
    });

  }


}
