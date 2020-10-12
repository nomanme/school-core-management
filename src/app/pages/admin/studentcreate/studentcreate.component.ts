import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {

  students;
  dataString;

  PriorEducationalAchievementFlag;
  altEmail: null;
  australianPr: null;
  birthcountryId;
  buildingName;
  // clientId;
  completedSchoolLevelId;
  dateModified: null;
  differentPostalAddress;
  disability;
  dob;
  email;
  employmentStatusId;
  englishSpeakingStatusId: null;
  firstName;
  flatUnitDetails;
  gender;
  homeLanguageId;
  indigenousStatusId;
  lastName
  middleName: null;
  mobile: null;
  nationalityId: null;
  passportExpdate: null;
  passportNo: null;
  postCode;
  schoolTypeId: null;
  signatoryText:null;
  stateId;
  statisticalAreaLevel1Id:null;
  statisticalAreaLevel2Id:null; 
  stillInSecSchool;
  streetName;
  streetNumber;
  // studentId": 1,
  suburb;
  surveyContactStatusId: 1;
  telHome:null;
  telWork:null;
  title:null;
  // userId;
  usiNo;
  visaExpdate: null;
  visaNo: null;
  visaStatusId: null;

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createStudent(form){

    this.dataString=`{"userId":"1", "email":"${form.value.email}", "altEmail":"${form.value.altEmail}", "australianPr":"${form.value.australianPr}", "birthcountryId": "${form.value.birthcountryId}", "buildingName": "${form.value.buildingName}", "completedSchoolLevelId": "${form.value.completedSchoolLevelId}", "differentPostalAddress": "${form.value.differentPostalAddress}", "disability": "${form.value.disability}", "dob": "${form.value.dob}", "employmentStatusId": "${form.value.employmentStatusId}", "englishSpeakingStatusId": "${form.value.englishSpeakingStatusId}", "firstName": "${form.value.firstName}", "flatUnitDetails": "${form.value.flatUnitDetails}", "gender": "${form.value.gender}", "homeLanguageId": "${form.value.homeLanguageId}", "indigenousStatusId": "${form.value.indigenousStatusId}", "lastName": "${form.value.lastName}", "middleName": "${form.value.middleName}", "mobile": "${form.value.mobile}", "nationalityId": "${form.value.nationalityId}", "passportExpdate": "${form.value.passportExpdate}", "passportNo": "${form.value.passportNo}", "postCode": "${form.value.postCode}", "schoolTypeId": "${form.value.schoolTypeId}", "signatoryText": "${form.value.signatoryText}", "stateId": "${form.value.stateId}", "statisticalAreaLevel1Id": "${form.value.statisticalAreaLevel1Id}", "statisticalAreaLevel2Id": "${form.value.statisticalAreaLevel2Id}", "stillInSecSchool": "${form.value.stillInSecSchool}", "streetName": "${form.value.streetName}", "streetNumber": "${form.value.streetNumber}", "suburb": "${form.value.suburb}", "surveyContactStatusId": "${form.value.surveyContactStatusId}", "telHome": "${form.value.telHome}", "telWork": "${form.value.telWork}", "title": "${form.value.title}", "usiNo": "${form.value.usiNo}", "visaExpdate": "${form.value.visaExpdate}", "visaNo": "${form.value.visaNo}", "visaStatusId": "${form.value.visaStatusId}"}`;

    console.log(this.dataString);
    this.apiService.postAPI('dev/student', this.dataString).subscribe((data)=>{
      console.log(data); 
    })
  }



}
