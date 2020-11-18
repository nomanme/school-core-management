import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-course-intake-date',
  templateUrl: './create-course-intake-date.component.html',
  styleUrls: ['./create-course-intake-date.component.css']
})
export class CreateCourseIntakeDateComponent implements OnInit {


  getcourse;
  getuser;

  courseintakedate;
  dataString;
  courseId = '';
  startDate = '';
  endDate = '';
  studentOriginIds = '';
  enrolmentFee = '';
  publish = '';
  userId = '';




  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      this.getcourse = data;
    });

    this.apiService.getAPI('dev/getuser').subscribe((data) => {
      this.getuser = data;
    });


  }

  createCourseIntakeDate(form) {

    this.dataString = `{"courseId":"${form.value.courseId}", "startDate":"${form.value.startDate}", "endDate":"${form.value.endDate}", "studentOriginIds":"${form.value.studentOriginIds}", "enrolmentFee":"${form.value.enrolmentFee}", "publish":"${form.value.publish}", "userId":"${form.value.userId}"}`;

    console.log(this.dataString);

    this.apiService.postAPI2('dev/addcourseintakedate', this.dataString).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/course-intake-date-list']);
    });

  }


}
