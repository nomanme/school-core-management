import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { Location } from '@angular/common';


@Component({
  selector: 'app-classsetup',
  templateUrl: './classsetup.component.html',
  styleUrls: ['./classsetup.component.css']
})
export class ClasssetupComponent implements OnInit {


  getClassSetup;
  getschedule;
  classSetupId;
  CourseId;
  // editClassSetup = {
  //   startScheduleId: null,
  //   endScheduleId: null, 
  // };

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private matDatepickerModule: MatDatepickerModule, private location: Location) { }

  ngOnInit(): void {
    //get data from course intake date
    this.CourseId = console.log(this.location.getState());

    this.apiService.getAPI2('dev/getclasssetup').subscribe((data) => {
      console.log(data);
      this.getClassSetup = data;
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

    this.classSetupId = rowId
    console.log(startDate + ' ' + this.classSetupId)
    console.log(endDate + ' ' + this.classSetupId)

    let datajson = `{"startDate":"${startDate}", "endDate":"${endDate}"}`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editclasssetup?classSetupId=${this.classSetupId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/class-timetable']);
    });
  }

}
