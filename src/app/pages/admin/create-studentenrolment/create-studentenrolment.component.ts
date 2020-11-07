import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service'; 

@Component({
  selector: 'app-create-studentenrolment',
  templateUrl: './create-studentenrolment.component.html',
  styleUrls: ['./create-studentenrolment.component.css']
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
  studentOriginId;
  courseId;
  agentId;
  courseIntakeDateId;
  applicationStatusId;
  deliveryModeId;
  fundingSourceNationalId;
  fundingSourceStateId;
  commencingProgramId;
  trainingContractid;
  reasonTakingCourseId;
  applyForRPL;
  TuitionFee;
  userId;
  outputD;

  allerrors='';

  errorMessage='';
  errorMessage1='';
  errorMessage2='';
  errorMessage3='';
  errorMessage4='';
  errorMessage5='';
  errorMessage6='';
  errorMessage7='';
  errorMessage8='';
  errorMessage9='';
  errorMessage10='';
  errorMessage11='';
  errors=true;
  errorCodes:{studentOriginId:''}

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.outputD=this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);


    this.apiService.getAPI3('dev/getapplicationstatus').subscribe((data)=>{
      // console.log(data);
      this.getapplicationstatus=data;
    })

    this.apiService.getAPI3('dev/getdeliverymode').subscribe((data)=>{
      // console.log(data);
      this.getdeliverymode=data;
    })

    this.apiService.getAPI3('dev/getfundingsourcenational').subscribe((data)=>{
      // console.log(data);
      this.getfundingsourcenational=data;
    })

    this.apiService.getAPI3('dev/getfundingsourcestate').subscribe((data)=>{
      // console.log(data);
      this.getfundingsourcestate=data;
    })

    this.apiService.getAPI3('dev/getcommencingprogram').subscribe((data)=>{
      // console.log(data);
      this.getcommencingprogram=data;
    })

    this.apiService.getAPI3('dev/getreasontakingcourse').subscribe((data)=>{
      // console.log(data);
      this.getreasontakingcourse=data;
    })

    this.apiService.getAPI('dev/getcourse').subscribe((data)=>{
      // console.log(data);
      this.getcourse=data;
    })

    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data)=>{
      // console.log(data);
      this.getcourseintakedate=data;
    })

    this.apiService.getAPI3('dev/getagent').subscribe((data)=>{
      // console.log(data);
      this.getagent=data;
    })

    this.apiService.getAPI3('dev/getstudentorigin').subscribe((data)=>{
      console.log(data);
      this.getstudentorigin=data;
    })

    this.apiService.getAPI3('dev/gettrainingcontract').subscribe((data)=>{
      // console.log(data);
      this.gettrainingcontract=data;
    })

    this.apiService.getAPI3('dev/getqualification').subscribe((data)=>{
      this.getqualification=data;
    })


  }

  createStudentEnrolment(form){


      this.allerrors='Required filled mustbe fillup otherwise you cant continue';
      console.log(form.value.allerrors)
      if(form.value.allerrors ==''){
      this.errorMessage = this.errorMessage + "allerrors"
      console.log(this.allerrors)
    }

      this.errorMessage='Required filled must be fillup studentOriginId'
      console.log(form.value.studentOriginId)
      if(form.value.studentOriginId ==''){
      this.errorMessage = this.errorMessage + "studentOriginId"
      console.log(this.errorMessage)
    }

    this.errorMessage1='Please fill up courseId'
    console.log(form.value.courseId)
      if(form.value.courseId ==''){
      this.errorMessage1 = this.errorMessage1 + "courseId"
      console.log(this.errorMessage1)
    }

      this.errorMessage2='Please fill up courseIntakeDateId'
      console.log(form.value.courseIntakeDateId)
      if(form.value.courseIntakeDateId ==''){
      this.errorMessage2 = this.errorMessage2 + "courseIntakeDateId"
      console.log(this.errorMessage2)
    }

      this.errorMessage3='Please fill up applicationStatusId'
      console.log(form.value.applicationStatusId)
      if(form.value.applicationStatusId ==''){
      this.errorMessage3 = this.errorMessage3 + "applicationStatusId"
      console.log(this.errorMessage3)
    }
      this.errorMessage4='Please fill up deliveryModeId'
      console.log(form.value.deliveryModeId)
      if(form.value.deliveryModeId ==''){
      this.errorMessage4 = this.errorMessage4 + "deliveryModeId"
      console.log(this.errorMessage4)
    }
      this.errorMessage5='Please fill up fundingSourceNationalId'
      console.log(form.value.fundingSourceNationalId)
      if(form.value.fundingSourceNationalId ==''){
      this.errorMessage5 = this.errorMessage5 + "fundingSourceNationalId"
      console.log(this.errorMessage5)
    }
      this.errorMessage6='Please fill up fundingSourceStateId'
      console.log(form.value.fundingSourceStateId)
      if(form.value.fundingSourceStateId ==''){
      this.errorMessage6 = this.errorMessage6 + "fundingSourceStateId"
      console.log(this.errorMessage6)
    }
      this.errorMessage7='Please fill up commencingProgramId'
      console.log(form.value.commencingProgramId)
      if(form.value.commencingProgramId ==''){
      this.errorMessage7 = this.errorMessage7 + "commencingProgramId"
      console.log(this.errorMessage7)
    }
      this.errorMessage8='Please fill up courseId'
      console.log(form.value.courseId)
      if(form.value.courseId ==''){
      this.errorMessage8 = this.errorMessage8 + "courseId"
      console.log(this.errorMessage8)
    }
      this.errorMessage9='Please fill up courseId'
      console.log(form.value.courseId)
      if(form.value.courseId ==''){
      this.errorMessage9 = this.errorMessage9 + "courseId"
      console.log(this.errorMessage9)
    }
      this.errorMessage10='Please fill up courseId'
      console.log(form.value.courseId)
      if(form.value.courseId ==''){
      this.errorMessage10 = this.errorMessage10 + "courseId"
      console.log(this.errorMessage10)
    }
      this.errorMessage11='Please fill up courseId'
      console.log(form.value.courseId)
      if(form.value.courseId ==''){
      this.errorMessage11 = this.errorMessage11 + "courseId"
      console.log(this.errorMessage11)
    }


    if (this.errors == false){

    this.dataString=`{"userId":"1", "studentId":"${this.apiService.getLocalStorage('studentId')}", "courseId":"${form.value.courseId}", "agentId":"${form.value.agentId}", "courseIntakeDateId":"${form.value.courseIntakeDateId}", "applicationStatusId":"${form.value.applicationStatusId}",  "applicationStatusId":"${form.value.applicationStatusId}","studentOriginId":"${form.value.studentOriginId}", "fundingSourceNationalId":"${form.value.fundingSourceNationalId}", "fundingSourceStateId":"${form.value.fundingSourceStateId}", "commencingProgramId":"${form.value.commencingProgramId}", "trainingContractid":"${form.value.trainingContractid}", "deliveryModeId":"${form.value.deliveryModeId}", "reasonTakingCourseId":"${form.value.reasonTakingCourseId}", "applyForRPL":"${form.value.applyForRPL}", "TuitionFee":"${form.value.TuitionFee}"}`;


    console.log(this.dataString);
    this.apiService.postAPI2('dev/addstudentenrolment', this.dataString).subscribe((data)=>{
      // console.log(data); 
      // this.router.navigate(['/admin/list-student-enrolment']);

    })
  }

  else{
    console.log('submit the form')
  }

  } 

}
