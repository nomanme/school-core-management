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
  course;
  getcourseunit;
  getcourseunitbycourseid;
  myString = '';
  str ='';

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private matDatepickerModule: MatDatepickerModule, private location: Location) { }

  ngOnInit(): void {

    this.course = this.activatedRoute.snapshot.paramMap.get('course');

    this.apiService.getAPI2('dev/getclasssetup').subscribe((data) => {
      console.log(data);
      this.getClassSetup = data;
    });

    this.apiService.getAPI3(`dev/getcourseunitbycourseid?courseId=${this.course}`).subscribe((data) => {
      console.log(data);
      this.getcourseunitbycourseid = data;
      console.log(this.getcourseunitbycourseid)

      const unitname = this.getcourseunitbycourseid;
      const result = unitname.map(t => t.unitName);
      console.log(result)
      // this.str=result
      this.str = result.join(", "); 
      console.log(this.str)
      
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

    let datajson = `{"startDate":"${startDate}", "endDate":"${endDate}" }`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editclasssetup?classSetupId=${this.classSetupId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/class-timetable']);
    });
  }

}
