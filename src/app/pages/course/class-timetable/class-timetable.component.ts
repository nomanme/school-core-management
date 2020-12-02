import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit {

  getclasstimetable;
  editClassTimetable = {
    startTime: null,
    endTime: null,

  };
  courseIntakeDateId;


  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private matDatepickerModule: MatDatepickerModule) { }

  ngOnInit(): void {
    this.apiService.getAPI2('dev/getclasstimetable').subscribe((data) => {
      console.log(data);
      this.getclasstimetable = data;
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
