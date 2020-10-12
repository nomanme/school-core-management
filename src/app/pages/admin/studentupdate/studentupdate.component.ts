import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {

  studentID;
  student;
  // PriorEducationalAchievementFlag: 1;
  // altEmail: null;
  // australianPr: null;
  // birthcountryId: 1;
  // buildingName;
  // // clientId: TEST190076;
  // completedSchoolLevelId: 1;
  // // dateModified: 2020-09-21 08:34:42;
  // differentPostalAddress;
  // disability: 1;
  // dob;
  // email;
  // employmentStatusId: 1;
  // englishSpeakingStatusId: null;
  // firstName;
  // flatUnitDetails;
  // gender;
  // homeLanguageId: 1;
  // indigenousStatusId:1;
  // lastName
  // middleName: null;
  // mobile: null;
  // nationalityId: null;
  // passportExpdate: null;
  // passportNo: null;
  // postCode;
  // schoolTypeId: null;
  // signatoryText:null;
  // stateId: 1;
  // statisticalAreaLevel1Id:null;
  // statisticalAreaLevel2Id:null;
  // stillInSecSchool;
  // streetName;
  // streetNumber;
  // // studentId": 1,
  // suburb;
  // surveyContactStatusId: 1;
  // telHome:null;
  // telWork:null;
  // title:null;
  // // userId;
  // usiNo;
  // visaExpdate: null;
  // visaNo: null;
  // visaStatusId: null;
  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.studentID= this.activatedRoute.snapshot.paramMap.get('id');

// `dev/user?userId=${}`

    this.apiService.getAPI(`dev/student?studentId=${this.studentID}`).subscribe((data)=>{
      console.log(data);
      this.student=data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.student)
    })
  }

  updateStudent(form){

    console.log(form.value);
    let datajson=`{"studentId":"1", "email":"${form.value.email}", "altEmail":"${form.value.altEmail}", "australianPr":"${form.value.australianPr}", "birthcountryId": "${form.value.birthcountryId}", "buildingName": "${form.value.buildingName}", "completedSchoolLevelId": "${form.value.completedSchoolLevelId}", "differentPostalAddress": "${form.value.differentPostalAddress}", "disability": "${form.value.disability}", "dob": "${form.value.dob}", "employmentStatusId": "${form.value.employmentStatusId}", "englishSpeakingStatusId": "${form.value.englishSpeakingStatusId}", "firstName": "${form.value.firstName}", "flatUnitDetails": "${form.value.flatUnitDetails}", "gender": "${form.value.gender}", "homeLanguageId": "${form.value.homeLanguageId}", "indigenousStatusId": "${form.value.indigenousStatusId}", "lastName": "${form.value.lastName}", "middleName": "${form.value.middleName}", "mobile": "${form.value.mobile}", "nationalityId": "${form.value.nationalityId}", "passportExpdate": "${form.value.passportExpdate}", "passportNo": "${form.value.passportNo}", "postCode": "${form.value.postCode}", "schoolTypeId": "${form.value.schoolTypeId}", "signatoryText": "${form.value.signatoryText}", "stateId": "${form.value.stateId}", "statisticalAreaLevel1Id": "${form.value.statisticalAreaLevel1Id}", "statisticalAreaLevel2Id": "${form.value.statisticalAreaLevel2Id}", "stillInSecSchool": "${form.value.stillInSecSchool}", "streetName": "${form.value.streetName}", "streetNumber": "${form.value.streetNumber}", "suburb": "${form.value.suburb}", "surveyContactStatusId": "${form.value.surveyContactStatusId}", "telHome": "${form.value.telHome}", "telWork": "${form.value.telWork}", "title": "${form.value.title}", "usiNo": "${form.value.usiNo}", "visaExpdate": "${form.value.visaExpdate}", "visaNo": "${form.value.visaNo}", "visaStatusId": "${form.value.visaStatusId}"}`;
    console.log(datajson);
    this.apiService.putAPI(`dev/student?studentId=${this.studentID}`, datajson).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['admin/student-list']);
    })

  }





  // student;
  // constructor(private apiService: ApiService, private router:Router) { }

  // ngOnInit(): void {

  //   this.apiService.getUser('dev/student').subscribe((data)=>{
  //     console.log(data);
  //     this.student=data;
  //   })
  // }

}
