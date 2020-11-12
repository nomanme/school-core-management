import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  getavetmisscourserecognition;
  getavetmisslevelofeducation;
  getavetmissfieldofeducation;
  getavetmissanzsco;


  courseId;
  course;


  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getAPI(`dev/getcourse?courseId=${this.courseId}`).subscribe((data) => {
      console.log(data);
      console.log(
        data[0]['courseStartDate']
      );
      this.course = data[0];
      console.log(this.course);

    });
  }

  editCourse(form) {
    console.log(form.value);
    let datajson = `{"courseId":"1","courseName":"${form.value.courseName}", "courseCode":"${form.value.courseCode}", "nationalCode":"${form.value.nationalCode}", "moduleDelivery":"${form.value.moduleDelivery}", "isSuperseded":"${form.value.isSuperseded}", "cricosCode":"${form.value.cricosCode}", "durationUnit":"${form.value.durationUnit}", "duration":"${form.value.duration}", "deliveryTarget":"${form.value.deliveryTarget}", "internationTutionFees":"${form.value.internationTutionFees}", "faculty":"${form.value.faculty}", "qualificationPrerequisite":"${form.value.qualificationPrerequisite}", "courseStartDate":"${form.value.courseStartDate}", "courseEndDate":"${form.value.courseEndDate}", "maximumWeeklyStudy":"${form.value.maximumWeeklyStudy}", "domesticTutionFees":"${form.value.domesticTutionFees}", "department":"${form.value.department}", "major":"${form.value.major}", "resultCalculationMethod":"${form.value.resultCalculationMethod}", "hasWorkPlacement":"${form.value.hasWorkPlacement}","flexibleTimetable":"${form.value.flexibleTimetable}", "courseLevel":"${form.value.courseLevel}", "activatedNow":"${form.value.activatedNow}", "avetmissCourseRecognitionId":"${form.value.avetmissCourseRecognitionId}", "avetmissLevelOfEducationId":"${form.value.avetmissLevelOfEducationId}", "avetmissFieldOfEducationId":"${form.value.avetmissFieldOfEducationId}", "avetmissANZSCOId":"${form.value.avetmissANZSCOId}", "avetmissTotalNominalHours":"${form.value.avetmissTotalNominalHours}", "avetmissReport":"${form.value.avetmissReport}", "courseDescriptin":"${form.value.courseDescriptin}"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/editcourse?courseId=${this.courseId}`, datajson).subscribe((data) => {
      console.log(data);

      this.router.navigate(['/course/list-courses']);
    });
  }

}
