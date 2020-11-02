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
getstudentorigin:any;
  studentEnrolmentId: number;
  studentOriginId: number;
  courseId: number;
  agentId: number;
  courseIntakeDateId:number;
  applicationStatusId: number;
  deliveryModeId:[number, null]
  fundingSourceNationalId: number;
  fundingSourceStateId:[number, null];
  commencingProgramId: number;
  trainingContractid: [string, null];
  reasonTakingCourseId: [number, null];
  applyForRPL: [any, null];
  TuitionFee: number;
  userId: number;
  outputD;

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

    this.dataString=`{"userId":"1", "studentId":"${this.apiService.getLocalStorage('studentId')}", "courseId":"${form.value.courseId}", "agentId":"${form.value.agentId}", "courseIntakeDateId":"${form.value.courseIntakeDateId}", "applicationStatusId":"${form.value.applicationStatusId}",  "applicationStatusId":"${form.value.applicationStatusId}","studentOriginId":"${form.value.studentOriginId}", "fundingSourceNationalId":"${form.value.fundingSourceNationalId}", "fundingSourceStateId":"${form.value.fundingSourceStateId}", "commencingProgramId":"${form.value.commencingProgramId}", "trainingContractid":"${form.value.trainingContractid}", "deliveryModeId":"${form.value.deliveryModeId}", "reasonTakingCourseId":"${form.value.reasonTakingCourseId}", "applyForRPL":"${form.value.applyForRPL}", "TuitionFee":"${form.value.TuitionFee}"}`;


    console.log(this.dataString);
    this.apiService.postAPI2('dev/addstudentenrolment', this.dataString).subscribe((data)=>{
      console.log(data); 
      // this.router.navigate(['/admin/list-student-enrolment']);

    })


  } 

}
