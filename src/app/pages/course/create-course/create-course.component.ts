import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  getavetmisscourserecognition;
  getavetmisslevelofeducation;
  getavetmissfieldofeducation;
  getavetmissanzsco;

  course;
  dataString;
  activatedNow = '';
  avetmissANZSCOId = '';
  avetmissCourseRecognitionId = '';
  avetmissFieldOfEducationId = '';
  avetmissLevelOfEducationId = '';
  avetmissReport = '';
  avetmissTotalNominalHours = '';
  courseCode = '';
  courseDescriptin = '';
  courseEndDate = '';
  courseId = '';
  courseLevel = '';
  courseName = '';
  courseStartDate = '';
  cricosCode = '';
  dateCreated = '';
  deliveryTarget = '';
  department = '';
  domesticTutionFees = '';
  duration = '';
  durationUnit = '';
  faculty = '';
  flexibleTimetable = '';
  hasWorkPlacement = '';
  internationTutionFees = '';
  isSuperseded = '';
  major = '';
  maximumWeeklyStudy = '';
  moduleDelivery = '';
  nationalCode = '';
  qualificationPrerequisite = '';
  resultCalculationMethod = '';

  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  error4 = '';
  error5 = '';
  error6 = '';
  error7 = '';
  error8 = '';
  error9 = '';
  error10 = '';

  errors = '';

  constructor(private apiService: ApiService, private router: Router) {}

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
  }

  createCourse(form) {
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
    if (form.value.avetmissReport == '') {
      this.error9 = 'true';
      this.errors = 'true';
    } else {
      this.error9 = '';
      this.errors = 'false';
    }

    if (this.errors != 'true') {
      this.dataString = `{"courseId":"1","courseName":"${form.value.courseName}", "courseCode":"${form.value.courseCode}", "nationalCode":"${form.value.nationalCode}", "moduleDelivery":"${form.value.moduleDelivery}", "isSuperseded":"${form.value.isSuperseded}", "cricosCode":"${form.value.cricosCode}", "durationUnit":"${form.value.durationUnit}", "duration":"${form.value.duration}", "deliveryTarget":"${form.value.deliveryTarget}", "internationTutionFees":"${form.value.internationTutionFees}", "faculty":"${form.value.faculty}", "qualificationPrerequisite":"${form.value.qualificationPrerequisite}", "courseStartDate":"${form.value.courseStartDate}", "courseEndDate":"${form.value.courseEndDate}", "maximumWeeklyStudy":"${form.value.maximumWeeklyStudy}", "domesticTutionFees":"${form.value.domesticTutionFees}", "department":"${form.value.department}", "major":"${form.value.major}", "resultCalculationMethod":"${form.value.resultCalculationMethod}", "hasWorkPlacement":"${form.value.hasWorkPlacement}","flexibleTimetable":"${form.value.flexibleTimetable}", "courseLevel":"${form.value.courseLevel}", "activatedNow":"${form.value.activatedNow}", "avetmissCourseRecognitionId":"${form.value.avetmissCourseRecognitionId}", "avetmissLevelOfEducationId":"${form.value.avetmissLevelOfEducationId}", "avetmissFieldOfEducationId":"${form.value.avetmissFieldOfEducationId}", "avetmissANZSCOId":"${form.value.avetmissANZSCOId}", "avetmissTotalNominalHours":"${form.value.avetmissTotalNominalHours}", "avetmissReport":"${form.value.avetmissReport}", "courseDescriptin":"${form.value.courseDescriptin}"}`;
      console.log(this.dataString);
      this.apiService
        .postAPI('dev/addcourse', this.dataString)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/course/list-courses']);
        });
    } else {
      ('there is error');
    }
  }
}
