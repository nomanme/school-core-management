import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-course-unit',
  templateUrl: './edit-course-unit.component.html',
  styleUrls: ['./edit-course-unit.component.css'],
})
export class EditCourseUnitComponent implements OnInit {
  getcourse;
  getunit;
  selected = [{ id: 'unitId', name: 'unitName' }];
  unitType;

  courseUnitId;
  editcourseUnit = {
    courseId: null,
    unitId: null,
    descriptions: '',
    unitType: '',
    vetFlag: '',
    AVETMISS: '',
  };

  allerrors = '';

  error0 = '';
  error1 = '';

  errors = '';

  // items = [
  //   {id: 1, name: 'Python'},
  //   {id: 2, name: 'Node Js'},
  //   {id: 3, name: 'Java'},
  //   {id: 4, name: 'PHP', disabled: true},
  //   {id: 5, name: 'Django'},
  //   {id: 6, name: 'Angular'},
  //   {id: 7, name: 'Vue'},
  //   {id: 8, name: 'ReactJs'},
  // ];
  // selected = [
  //   {id: 2, name: 'Node Js'},
  //   {id: 8, name: 'ReactJs'}
  // ];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      this.getcourse = data;
    });

    this.apiService.getAPI('dev/getunit').subscribe((data) => {
      this.getunit = data;
      console.log(data);
    });

    this.courseUnitId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService
      .getAPI(`dev/getcourseunit?courseUnitId=${this.courseUnitId}`)
      .subscribe((data) => {
        console.log(data);
        this.editcourseUnit = data[0];
        console.log(this.editcourseUnit);
      });
  }

  updateCourseUnit(form) {
    if (form.value.courseId == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.unitId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    console.log(form.value);

    if (this.errors != 'true') {
      let datajson = `{"descriptions":"${form.value.descriptions}", "unitType":"${form.value.unitType}", "vetFlag":"${form.value.vetFlag}", "AVETMISS":"${form.value.AVETMISS}"}`;
      console.log(datajson);

      this.apiService
        .postAPI(
          `dev/editcourseunit?courseUnitId=${this.courseUnitId}`,
          datajson
        )
        .subscribe((data) => {
          console.log(data);
          console.log();
          // this.router.navigate(['/course/list-course-units']);
        });
    } else {
      ('there is error');
    }
  }

  // delCourseUnit(form){

  //   console.log(form.value);
  //    let datajson=`{"descriptions":"${form.value.descriptions}", "unitType":"${form.value.unitType}", "vetFlag":"${form.value.vetFlag}", "AVETMISS":"${form.value.AVETMISS }"}`;
  //   console.log(datajson);
  //   this.apiService.postAPI(`dev/deletecourseunit?courseUnitId=${this.courseUnitId}`, datajson).subscribe((data)=>{
  //   console.log(data);
  //   this.router.navigate(['/course/list-course-units']);
  //   })

  // }
}
