import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { MatDatepickerModule } from '@angular/material/datepicker';





@Component({
  selector: 'app-course-intake-date',
  templateUrl: './course-intake-date.component.html',
  styleUrls: ['./course-intake-date.component.css']
})
export class CourseIntakeDateComponent implements OnInit {

  CourseIntakeDate;
  editcourseintakedate = {
    courseId: null,
    startDate: null,
    endDate: null,
    studentOriginIds: null,
    enrolmentFee: null,
    publish: null,
    userId: null,
  };
  courseIntakeDateId;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private mgitatDatepickerModule: MatDatepickerModule) { }

  ngOnInit(): void {
    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data) => {
      console.log(data);
      this.CourseIntakeDate = data;


      this.apiService.getAPI2(`dev/getcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`).subscribe((data) => {
        console.log(data);
        this.editcourseintakedate = data[0];
        console.log(this.editcourseintakedate);
      });
    });


  }

}
