import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  getavetmisscourserecognition;
  getavetmisslevelofeducation;
  getavetmissfieldofeducation;
  getavetmissanzsco;

  courseId;
  course;

  courseName = '';
  courseCode = '';
  duration = '';
  durationUnit = '';
  avetmissCourseRecognitionId = '';
  avetmissLevelOfEducationId = '';
  avetmissFieldOfEducationId = '';
  avetmissANZSCOId = '';

  error0: string = '';
  error1: string = '';
  error2: string = '';
  error3: string = '';
  error4: string = '';
  error5: string = '';
  error6: string = '';
  error7: string = '';
  error8: string = '';

  errors = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService
      .getAPI3('dev/getavetmisscourserecognition')
      .subscribe((data) => {
        this.getavetmisscourserecognition = data;
      });

    this.apiService
      .getAPI3('dev/getavetmisslevelofeducation')
      .subscribe((data) => {
        this.getavetmisslevelofeducation = data;
      });

    this.apiService
      .getAPI3('dev/getavetmissfieldofeducation')
      .subscribe((data) => {
        this.getavetmissfieldofeducation = data;
      });

    this.apiService.getAPI3('dev/getavetmissanzsco').subscribe((data) => {
      this.getavetmissanzsco = data;
    });

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService
      .getAPI(`dev/getcourse?courseId=${this.courseId}`)
      .subscribe((data) => {
        console.log(data);
        console.log(data[0]['courseStartDate']);
        this.course = data[0];
        console.log(this.course);
      });
  }

  editCourse(form) {
    if (form.value.courseName == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.courseCode == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (form.value.duration == '') {
      this.error2 = 'true';
      this.errors = 'true';
    } else {
      this.error2 = '';
      this.errors = 'false';
    }

    if (form.value.durationUnit == '') {
      this.error3 = 'true';
      this.errors = 'true';
    } else {
      this.error3 = '';
      this.errors = 'false';
    }

    if (form.value.avetmissCourseRecognitionId == '') {
      this.error4 = 'true';
      this.errors = 'true';
    } else {
      this.error4 = '';
      this.errors = 'false';
    }
    if (form.value.avetmissLevelOfEducationId == '') {
      this.error5 = 'true';
      this.errors = 'true';
    } else {
      this.error5 = '';
      this.errors = 'false';
    }
    if (form.value.avetmissFieldOfEducationId == '') {
      this.error6 = 'true';
      this.errors = 'true';
    } else {
      this.error6 = '';
      this.errors = 'false';
    }
    if (form.value.avetmissANZSCOId == '') {
      this.error7 = 'true';
      this.errors = 'true';
    } else {
      this.error7 = '';
      this.errors = 'false';
    }
    if (form.value.avetmissTotalNominalHours == '') {
      this.error8 = 'true';
      this.errors = 'true';
    } else {
      this.error8 = '';
      this.errors = 'false';
    }

    console.log(form.value);

    if (this.errors != 'true') {
      let datajson = `{"courseId":"1","courseName":"${form.value.courseName}", "courseCode":"${form.value.courseCode}", "nationalCode":"${form.value.nationalCode}", "moduleDelivery":"${form.value.moduleDelivery}", "isSuperseded":"${form.value.isSuperseded}", "cricosCode":"${form.value.cricosCode}", "durationUnit":"${form.value.durationUnit}", "duration":"${form.value.duration}", "deliveryTarget":"${form.value.deliveryTarget}", "internationTutionFees":"${form.value.internationTutionFees}", "faculty":"${form.value.faculty}", "qualificationPrerequisite":"${form.value.qualificationPrerequisite}", "courseStartDate":"${form.value.courseStartDate}", "courseEndDate":"${form.value.courseEndDate}", "maximumWeeklyStudy":"${form.value.maximumWeeklyStudy}", "domesticTutionFees":"${form.value.domesticTutionFees}", "department":"${form.value.department}", "major":"${form.value.major}", "resultCalculationMethod":"${form.value.resultCalculationMethod}", "hasWorkPlacement":"${form.value.hasWorkPlacement}","flexibleTimetable":"${form.value.flexibleTimetable}", "courseLevel":"${form.value.courseLevel}", "activatedNow":"${form.value.activatedNow}", "avetmissCourseRecognitionId":"${form.value.avetmissCourseRecognitionId}", "avetmissLevelOfEducationId":"${form.value.avetmissLevelOfEducationId}", "avetmissFieldOfEducationId":"${form.value.avetmissFieldOfEducationId}", "avetmissANZSCOId":"${form.value.avetmissANZSCOId}", "avetmissTotalNominalHours":"${form.value.avetmissTotalNominalHours}", "avetmissReport":"${form.value.avetmissReport}", "courseDescriptin":"${form.value.courseDescriptin}"}`;
      console.log(datajson);
      this.apiService
        .postAPI(`dev/editcourse?courseId=${this.courseId}`, datajson)
        .subscribe((data) => {
          console.log(data);

          // this.router.navigate(['/course/list-courses']);
        });
    } else {
      ('There is error');
    }
  }
}
