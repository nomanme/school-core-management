import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-studentenrolment',
  templateUrl: './create-studentenrolment.component.html',
  styleUrls: ['./create-studentenrolment.component.css'],
})
export class CreateStudentenrolmentComponent implements OnInit {
  // getstudentorigin;
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

  addstudentenrolment;
  dataString;
  getstudentorigin;
  studentEnrolmentId;
  studentOriginId = '';
  courseId = '';
  agentId = '';
  courseIntakeDateId = '';
  applicationStatusId = '';
  deliveryModeId = '';
  fundingSourceNationalId = '';
  fundingSourceStateId = '';
  commencingProgramId = '';
  trainingContractid = '';
  reasonTakingCourseId = '';
  applyForRPL = '';
  TuitionFee = '';
  userId;
  outputD;

  allerrors = '';

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
  error11 = '';
  error12 = '';
  error13 = '';
  errors = '';
  errorCodes: { studentOriginId: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.outputD = this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);

    this.apiService.getAPI3('dev/getapplicationstatus').subscribe((data) => {
      // console.log(data);
      this.getapplicationstatus = data;
    });

    this.apiService.getAPI3('dev/getdeliverymode').subscribe((data) => {
      // console.log(data);
      this.getdeliverymode = data;
    });

    this.apiService
      .getAPI3('dev/getfundingsourcenational')
      .subscribe((data) => {
        // console.log(data);
        this.getfundingsourcenational = data;
      });

    this.apiService.getAPI3('dev/getfundingsourcestate').subscribe((data) => {
      // console.log(data);
      this.getfundingsourcestate = data;
    });

    this.apiService.getAPI3('dev/getcommencingprogram').subscribe((data) => {
      // console.log(data);
      this.getcommencingprogram = data;
    });

    this.apiService.getAPI3('dev/getreasontakingcourse').subscribe((data) => {
      // console.log(data);
      this.getreasontakingcourse = data;
    });

    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      // console.log(data);
      this.getcourse = data;
    });

    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data) => {
      // console.log(data);
      this.getcourseintakedate = data;
    });

    this.apiService.getAPI3('dev/getagent').subscribe((data) => {
      // console.log(data);
      this.getagent = data;
    });

    this.apiService.getAPI3('dev/getstudentorigin').subscribe((data) => {
      console.log(data);
      this.getstudentorigin = data;
    });

    this.apiService.getAPI3('dev/gettrainingcontract').subscribe((data) => {
      // console.log(data);
      this.gettrainingcontract = data;
    });

    this.apiService.getAPI3('dev/getqualification').subscribe((data) => {
      this.getqualification = data;
    });
  }

  createStudentEnrolment(form) {
    if (form.value.allerrors == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    console.log(form.value.studentOriginId);

    if (form.value.studentOriginId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }
    console.log(`1: ${this.errors}`);

    if (form.value.courseId == '') {
      this.error2 = 'true';
      this.errors = 'true';
    } else {
      this.error2 = '';
      this.errors = 'false';
    }

    console.log(`2: ${this.errors}`);

    if (form.value.courseIntakeDateId == '') {
      this.error3 = 'true';
      this.errors = 'true';
    } else {
      this.error3 = '';
      this.errors = 'false';
    }
    console.log(`3: ${this.errors}`);

    if (form.value.applicationStatusId == '') {
      this.error4 = 'true';
      this.errors = 'true';
    } else {
      this.error4 = '';
      this.errors = 'false';
    }

    if (form.value.deliveryModeId == '') {
      this.error5 = 'true';
      this.errors = 'true';
    } else {
      this.error5 = '';
      this.errors = 'false';
    }

    if (form.value.fundingSourceNationalId == '') {
      this.error6 = 'true';
      this.errors = 'true';
    } else {
      this.error6 = '';
      this.errors = 'false';
    }

    if (form.value.fundingSourceStateId == '') {
      this.error7 = 'true';
      this.errors = 'true';
    } else {
      this.error7 = '';
      this.errors = 'false';
    }

    if (form.value.commencingProgramId == '') {
      this.error8 = 'true';
      this.errors = 'true';
    } else {
      this.error8 = '';
      this.errors = 'false';
    }

    if (form.value.courseId == '') {
      this.error9 = 'true';
      this.errors = 'true';
    } else {
      this.error9 = '';
      this.errors = 'false';
    }

    if (form.value.courseId == '') {
      this.error10 = 'true';
      this.errors = 'true';
    } else {
      this.error10 = '';
      this.errors = 'false';
    }

    if (form.value.courseId == '') {
      this.error11 = 'true';
      this.errors = 'true';
    } else {
      this.error11 = '';
      this.errors = 'false';
    }

    if (form.value.courseId == '') {
      this.error12 = 'true';
      this.errors = 'true';
    } else {
      this.error12 = '';
      this.errors = 'false';
    }

    if (form.value.courseId == '') {
      this.error13 = 'true';
      this.errors = 'true';
    } else {
      this.error13 = '';
      this.errors = 'false';
    }

    console.log(`atend: ${this.errors}`);

    if (this.errors != 'true') {
      this.dataString = `{"userId":"1", "studentId":"${this.apiService.getLocalStorage(
        'studentId'
      )}", "courseId":"${form.value.courseId}", "agentId":"${
        form.value.agentId
      }", "courseIntakeDateId":"${
        form.value.courseIntakeDateId
      }", "applicationStatusId":"${
        form.value.applicationStatusId
      }",  "applicationStatusId":"${
        form.value.applicationStatusId
      }","studentOriginId":"${
        form.value.studentOriginId
      }", "fundingSourceNationalId":"${
        form.value.fundingSourceNationalId
      }", "fundingSourceStateId":"${
        form.value.fundingSourceStateId
      }", "commencingProgramId":"${
        form.value.commencingProgramId
      }", "trainingContractid":"${
        form.value.trainingContractid
      }", "deliveryModeId":"${
        form.value.deliveryModeId
      }", "reasonTakingCourseId":"${
        form.value.reasonTakingCourseId
      }", "applyForRPL":"${form.value.applyForRPL}", "TuitionFee":"${
        form.value.TuitionFee
      }"}`;

      console.log(this.dataString);
      this.apiService
        .postAPI2('dev/addstudentenrolment', this.dataString)
        .subscribe((data) => {
          // console.log(data);
          // this.router.navigate(['/admin/list-student-enrolment']);
        });
    } else {
      console.log('submit the form');
    }
  }
}
