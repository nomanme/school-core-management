import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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


  studentenrolment;
  addstudentenrolment;
  dataString;
  studentEnrolmentId;
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

  dataString2;
  priorEducationalAchievementId;
  priorqualification;

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

  prioreducation;
  qualification = false;
  studentOrigin;
  studentOriginId = null;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.prioreducation = this.activatedRoute.snapshot.paramMap.get('prioreducation');

    this.studentOrigin = this.activatedRoute.snapshot.paramMap.get('studentOrigin');

    this.outputD = this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);

    this.apiService.getAPI3('dev/getapplicationstatus').subscribe((data) => {
      this.getapplicationstatus = data;
    });

    this.apiService.getAPI3('dev/getdeliverymode').subscribe((data) => {
      this.getdeliverymode = data;
    });

    this.apiService.getAPI3('dev/getfundingsourcenational').subscribe((data) => {
      this.getfundingsourcenational = data;
    });

    this.apiService.getAPI3('dev/getfundingsourcestate').subscribe((data) => {
      this.getfundingsourcestate = data;
    });

    this.apiService.getAPI3('dev/getcommencingprogram').subscribe((data) => {
      this.getcommencingprogram = data;
    });

    this.apiService.getAPI3('dev/getreasontakingcourse').subscribe((data) => {
      this.getreasontakingcourse = data;
    });

    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      this.getcourse = data;
    });

    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data) => {
      this.getcourseintakedate = data;
    });

    this.apiService.getAPI3('dev/getagent').subscribe((data) => {
      this.getagent = data;
    });

    // this.apiService.getAPI3('dev/getstudentorigin').subscribe((data) => {
    //   console.log(data);
    //   this.getstudentorigin = data;
    // });

    this.apiService.getAPI3('dev/gettrainingcontract').subscribe((data) => {
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
      this.studentOriginId = 3;
    }
    else if (this.studentOrigin == 2) {
      this.studentOriginId = 3;
    }
    else {
      this.studentOriginId = 3;
    }
    // console.log('hi!' + this.studentOriginId);
  }



  createStudentEnrolment(form) {
    if (form.value.allerrors == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
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
      )}", "courseId":"${form.value.courseId}", "agentId":"${form.value.agentId
        }", "courseIntakeDateId":"${form.value.courseIntakeDateId
        }", "studentOriginId":"${this.studentOriginId
        }", "applicationStatusId":"${form.value.applicationStatusId
        }",  "applicationStatusId":"${form.value.applicationStatusId
        }", "fundingSourceNationalId":"${form.value.fundingSourceNationalId
        }", "fundingSourceStateId":"${form.value.fundingSourceStateId
        }", "commencingProgramId":"${form.value.commencingProgramId
        }", "trainingContractid":"${form.value.trainingContractid
        }", "deliveryModeId":"${form.value.deliveryModeId
        }", "reasonTakingCourseId":"${form.value.reasonTakingCourseId
        }", "applyForRPL":"${form.value.applyForRPL}", "TuitionFee":"${form.value.TuitionFee
        }"}`;

      console.log(this.dataString);
      this.apiService.postAPI2('dev/addstudentenrolment', this.dataString).subscribe((data) => {
        console.log(data);
        this.studentenrolment = JSON.parse(data['msg']);
        this.studentenrolment = this.studentenrolment[0].studentEnrolmentId;

        console.log(this.studentenrolment);

        if (this.prioreducation == "Y") {
          //Prior Educational Achievement Flag
          this.dataString2 = `{"userId":"1", "studentEnrolmentId":"${this.studentenrolment}", "QualificationId":"${form.value.priorqualification}"}`;
          console.log(this.dataString2);
          // this.apiService.setLocalStorage('studentId', this.outputD);
          this.apiService.postAPI2('dev/addprioreducationalachievement', this.dataString2).subscribe((data2) => {
            console.log(data2);
          });
        }



        this.router.navigate(['/admin/student-list']);


      });
    } else {
      console.log('submit the form');
    }
  }
}
