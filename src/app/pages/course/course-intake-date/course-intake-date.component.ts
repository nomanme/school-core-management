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
    courseIntakeDateId: null
  };
  courseIntakeDateId;


  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private matDatepickerModule: MatDatepickerModule) { }

  ngOnInit(): void {
    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data) => {
      console.log(data);
      this.CourseIntakeDate = data;


      // this.apiService.getAPI2(`dev/getcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`).subscribe((data) => {
      //   console.log(data);
      //   this.editcourseintakedate = data[0];
      //   console.log(this.editcourseintakedate);
      // });
    });
  }

  myFunction($event: any) {
    var rowId = $event.currentTarget.getAttribute('id');

    var startDate = (<HTMLInputElement>document.getElementById("sdate" + rowId)).value;
    var startDateParts = startDate.split("/");
    startDate = startDateParts[2] + '-' + startDateParts[0] + '-' + startDateParts[1];

    var endDate = (<HTMLInputElement>document.getElementById("edate" + rowId)).value;
    var endtDateParts = endDate.split("/");
    endDate = endtDateParts[2] + '-' + endtDateParts[0] + '-' + endtDateParts[1];

    this.courseIntakeDateId = rowId
    console.log(startDate + ' ' + this.courseIntakeDateId)
    console.log(endDate + ' ' + this.courseIntakeDateId)



    let datajson = `{"startDate":"${startDate}", "endDate":"${endDate}"}`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`, datajson).subscribe((data) => {
      console.log(data);
      // this.router.navigate(['/course/course-intake-date-list']);
    });
  }



}
