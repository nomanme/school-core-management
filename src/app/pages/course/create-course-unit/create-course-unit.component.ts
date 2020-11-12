import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-course-unit',
  templateUrl: './create-course-unit.component.html',
  styleUrls: ['./create-course-unit.component.css']
})
export class CreateCourseUnitComponent implements OnInit {

  getcourse;
  getunit;

  courseunits;
  dataString;
  courseId;
  unitId;
  descriptions;
  unitType;
  vetFlag;
  AVETMISS;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      this.getcourse = data;
    })

    this.apiService.getAPI('dev/getunit').subscribe((data) => {
      this.getunit = data;
    })

  }

  createCourseUnit(form) {

    this.dataString = `{"courseId":"${form.value.courseId}","unitId":"${form.value.unitId}","descriptions":"${form.value.descriptions}", "unitType":"${form.value.unitType}","vetFlag":"${form.value.vetFlag}","AVETMISS":"${form.value.AVETMISS}"}`;

    console.log(this.dataString);
    this.apiService.postAPI('dev/addcourseunit', this.dataString).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/list-course-units']);

    })
  }

}
