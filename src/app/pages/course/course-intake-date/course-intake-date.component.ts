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


  startDate: string;

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
    var startDate = document.getElementById("sdate" + rowId).value;
    // var startD = document.getElementById("sdate");
    // if (startD) {
    //   var startDate = startD.value;
    // }
    this.courseIntakeDateId = rowId
    console.log(startDate + ' ' + this.courseIntakeDateId)


    // var endDate = document.getElementById("edate" + rowId).value;
    // console.log(endDate)


    let datajson = `{"startDate":"${startDate}"}`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`, datajson).subscribe((data) => {
      // console.log(data);
      // this.router.navigate(['/course/course-intake-date-list']);
    });
  }



}
