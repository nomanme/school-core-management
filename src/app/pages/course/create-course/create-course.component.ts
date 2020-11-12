import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  getavetmisscourserecognition;
  getavetmisslevelofeducation;
  getavetmissfieldofeducation;
  getavetmissanzsco;


  course;
  dataString;
  activatedNow = "";
  avetmissANZSCOId = "";
  avetmissCourseRecognitionId = "";
  avetmissFieldOfEducationId = "";
  avetmissLevelOfEducationId = "";
  avetmissReport = "";
  avetmissTotalNominalHours;
  courseCode;
  courseDescriptin = "";
  courseEndDate = "";
  courseId = "";
  courseLevel = "";
  courseName;
  courseStartDate = "";
  cricosCode = "";
  dateCreated = "";
  deliveryTarget = "";
  department = "";
  domesticTutionFees = "";
  duration;
  durationUnit;
  faculty = "";
  flexibleTimetable = "";
  hasWorkPlacement = "";
  internationTutionFees = "";
  isSuperseded = "";
  major = "";
  maximumWeeklyStudy = "";
  moduleDelivery = "";
  nationalCode = "";
  qualificationPrerequisite = "";
  resultCalculationMethod = "";

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.apiService.getAPI3('dev/getavetmisscourserecognition').subscribe((data) => {
      this.getavetmisscourserecognition = data;
    });

    this.apiService.getAPI3('dev/getavetmisslevelofeducation').subscribe((data) => {
      this.getavetmisslevelofeducation = data;
    });

    this.apiService.getAPI3('dev/getavetmissfieldofeducation').subscribe((data) => {
      this.getavetmissfieldofeducation = data;
    });

    this.apiService.getAPI3('dev/getavetmissanzsco').subscribe((data) => {
      this.getavetmissanzsco = data;
    });



  }

  createCourse(form) {

    this.dataString = `{"courseId":"1","courseName":"${form.value.courseName}", "courseCode":"${form.value.courseCode}", "nationalCode":"${form.value.nationalCode}", "moduleDelivery":"${form.value.moduleDelivery}", "isSuperseded":"${form.value.isSuperseded}", "cricosCode":"${form.value.cricosCode}", "durationUnit":"${form.value.durationUnit}", "duration":"${form.value.duration}", "deliveryTarget":"${form.value.deliveryTarget}", "internationTutionFees":"${form.value.internationTutionFees}", "faculty":"${form.value.faculty}", "qualificationPrerequisite":"${form.value.qualificationPrerequisite}", "courseStartDate":"${form.value.courseStartDate}", "courseEndDate":"${form.value.courseEndDate}", "maximumWeeklyStudy":"${form.value.maximumWeeklyStudy}", "domesticTutionFees":"${form.value.domesticTutionFees}", "department":"${form.value.department}", "major":"${form.value.major}", "resultCalculationMethod":"${form.value.resultCalculationMethod}", "hasWorkPlacement":"${form.value.hasWorkPlacement}","flexibleTimetable":"${form.value.flexibleTimetable}", "courseLevel":"${form.value.courseLevel}", "activatedNow":"${form.value.activatedNow}", "avetmissCourseRecognitionId":"${form.value.avetmissCourseRecognitionId}", "avetmissLevelOfEducationId":"${form.value.avetmissLevelOfEducationId}", "avetmissFieldOfEducationId":"${form.value.avetmissFieldOfEducationId}", "avetmissANZSCOId":"${form.value.avetmissANZSCOId}", "avetmissTotalNominalHours":"${form.value.avetmissTotalNominalHours}", "avetmissReport":"${form.value.avetmissReport}", "courseDescriptin":"${form.value.courseDescriptin}"}`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/addcourse', this.dataString).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/list-courses']);

    })
  }


}
