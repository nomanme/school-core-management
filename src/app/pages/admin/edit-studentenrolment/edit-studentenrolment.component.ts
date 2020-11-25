import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-studentenrolment',
  templateUrl: './edit-studentenrolment.component.html',
  styleUrls: ['./edit-studentenrolment.component.css'],
})
export class EditStudentenrolmentComponent implements OnInit {
  getstudentorigin;
  getcourse;
  getagent;
  getcourseintakedate;
  getapplicationstatus;
  getdeliverymode;
  getfundingsourcenational;
  getfundingsourcestate;
  getcommencingprogram;
  getreasontakingcourse;
  gettrainingcontract;
  getqualification;

  studentEnrolmentId;
  getstudentenrolment;
  editstudentenrolment = {
    studentEnrolmentId: null,
    studentId: null,
    studentOriginId: null,
    agentId: null,
    courseIntakeDateId: null,
    applicationStatusId: null,
    deliveryModeId: null,
    fundingSourceNationalId: null,
    fundingSourceStateId: null,
    commencingProgramId: null,
    trainingContractid: null,
    reasonTakingCourseId: null,
    applyForRPL: null,
    TuitionFee: null,
    userId: null,
  };


  prioreducation;
  qualification = false;
  studentOrigin;
  studentOriginId = null;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.apiService.getAPI3('dev/getapplicationstatus').subscribe((data) => {
      console.log(data);
      this.getapplicationstatus = data;
    });

    this.apiService.getAPI3('dev/getdeliverymode').subscribe((data) => {
      console.log(data);
      this.getdeliverymode = data;
    });

    this.apiService.getAPI3('dev/getfundingsourcenational').subscribe((data) => {
      console.log(data);
      this.getfundingsourcenational = data;
    });

    this.apiService.getAPI3('dev/getfundingsourcestate').subscribe((data) => {
      console.log(data);
      this.getfundingsourcestate = data;
    });

    this.apiService.getAPI3('dev/getcommencingprogram').subscribe((data) => {
      console.log(data);
      this.getcommencingprogram = data;
    });

    this.apiService.getAPI3('dev/getreasontakingcourse').subscribe((data) => {
      console.log(data);
      this.getreasontakingcourse = data;
    });

    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      console.log(data);
      this.getcourse = data;
    });

    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data) => {
      console.log(data);
      this.getcourseintakedate = data;
    });

    this.apiService.getAPI3('dev/getagent').subscribe((data) => {
      console.log(data);
      this.getagent = data;
    });

    this.apiService.getAPI3('dev/getstudentorigin').subscribe((data) => {
      console.log(data);
      this.getstudentorigin = data;
    });

    this.apiService.getAPI3('dev/gettrainingcontract').subscribe((data) => {
      console.log(data);
      this.gettrainingcontract = data;
    });

    this.apiService.getAPI3('dev/getqualification').subscribe((data) => {
      this.getqualification = data;
    });

    if (this.prioreducation == 'Y') {
      this.qualification = true;
    }
    else {
      this.qualification = false;
    }

    if (this.studentOrigin == 1) {
      this.studentOriginId = 1;
    }
    else if (this.studentOrigin == 2) {
      this.studentOriginId = 2;
    }
    else {
      this.studentOriginId = 3;
    }



    this.studentEnrolmentId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI2(`dev/getstudentenrolment?studentEnrolmentId=${this.studentEnrolmentId}`).subscribe((data) => {
      console.log(data);
      this.editstudentenrolment = data[0];
      console.log(this.editstudentenrolment);
    });
  }

  editStudentEnrolment(form) {
    console.log(form.value);
    let datajson = `{"userId":"1", "studentId":"${form.value.studentId}", "studentOriginId":"${form.value.studentOriginId}", "courseId":"${form.value.courseId}", "agentId":"${form.value.agentId}", "courseIntakeDateId":"${form.value.courseIntakeDateId}", "applicationStatusId":"${form.value.applicationStatusId}", "deliveryModeId":"${form.value.deliveryModeId}", "fundingSourceNationalId":"${form.value.fundingSourceNationalId}", "fundingSourceStateId":"${form.value.fundingSourceStateId}", "commencingProgramId":"${form.value.commencingProgramId}", "trainingContractid":"${form.value.trainingContractid}", "reasonTakingCourseId":"${form.value.reasonTakingCourseId}", "applyForRPL":"${form.value.applyForRPL}", "TuitionFee":"${form.value.TuitionFee}"}`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editstudentenrolment?studentEnrolmentId=${this.studentEnrolmentId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/list-student-enrolment']);
    });
  }
}
