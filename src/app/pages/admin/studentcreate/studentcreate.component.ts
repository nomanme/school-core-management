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

  PriorEducationalAchievementFlag: string;
  altEmail: [string, null];
  australianPr: [any, null];
  birthcountryId: number;
  buildingName: [string, null];
  clientId: string;
  completedSchoolLevelId: number;
  dateModified: null;
  differentPostalAddress: any;
  disability: string;
  dob: Date;
  email: string;
  employmentStatusId: number;
  englishSpeakingStatusId: [number, null];
  firstName: string;
  flatUnitDetails: [string, null];
  gender: string;
  homeLanguageId: number;
  indigenousStatusId: number;
  lastName: [string, null];
  middleName: [string, null];
  mobile: [string, null];
  nationalityId: [number, null];
  passportExpdate: [Date, null];
  passportNo: [string, null];
  postCode: string;
  schoolTypeId: [number, null];
  signatoryText: [string, null];
  stateId: number;
  statisticalAreaLevel1Id: [string, null];
  statisticalAreaLevel2Id: [string, null];
  stillInSecSchool: [string, null];
  streetName: string;
  streetNumber: string;
  studentId: number;
  suburb: string;
  surveyContactStatusId: number;
  telHome: [string, null];
  telWork: [string, null];
  title: [string, null];
  userId: number;
  usiNo: [string, null];
  visaExpdate: Date;
  visaNo: [string, null];
  visaStatusId: [number, null];
  dataString2;

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createStudent(form){

    this.dataString=`{"userId":"1", "clientId":"${form.value.clientId}", "PriorEducationalAchievementFlag":"${form.value.PriorEducationalAchievementFlag}", "altEmail":"${form.value.altEmail}", "australianPr":"${form.value.australianPr}", "birthcountryId": "${form.value.birthcountryId}", "buildingName": "${form.value.buildingName}",  "completedSchoolLevelId": "${form.value.completedSchoolLevelId}", "differentPostalAddress": "${form.value.differentPostalAddress}", "disability": "${form.value.disability}", "dob": "${form.value.dob}", "email":"${form.value.email}", "employmentStatusId": "${form.value.employmentStatusId}", "englishSpeakingStatusId": "${form.value.englishSpeakingStatusId}", "firstName": "${form.value.firstName}", "flatUnitDetails": "${form.value.flatUnitDetails}", "gender": "${form.value.gender}", "homeLanguageId": "${form.value.homeLanguageId}", "indigenousStatusId": "${form.value.indigenousStatusId}", "lastName": "${form.value.lastName}", "middleName": "${form.value.middleName}", "mobile": "${form.value.mobile}", "nationalityId": "${form.value.nationalityId}", "passportExpdate": "${form.value.passportExpdate}", "passportNo": "${form.value.passportNo}", "postCode": "${form.value.postCode}", "schoolTypeId": "${form.value.schoolTypeId}", "signatoryText": "${form.value.signatoryText}", "stateId": "${form.value.stateId}", "statisticalAreaLevel1Id": "${form.value.statisticalAreaLevel1Id}", "statisticalAreaLevel2Id": "${form.value.statisticalAreaLevel2Id}", "stillInSecSchool": "${form.value.stillInSecSchool}", "streetName": "${form.value.streetName}", "streetNumber": "${form.value.streetNumber}", "suburb": "${form.value.suburb}", "surveyContactStatusId": "${form.value.surveyContactStatusId}", "telHome": "${form.value.telHome}", "telWork": "${form.value.telWork}", "title": "${form.value.title}", "usiNo": "${form.value.usiNo}", "visaExpdate": "${form.value.visaExpdate}", "visaNo": "${form.value.visaNo}", "visaStatusId": "${form.value.visaStatusId}"}`;

    // this.dataString2=`{"clientId":"TEST190007","title":null,"gender":"F","firstName":"firstName Test 9999","middleName":null,"lastName":"test test test","dob":"2019-01-01","buildingName":null,"flatUnitDetails":null,"streetNumber":2,"streetName":"streetName","suburb":"suburb","postCode":2066,"stateId":1,"telHome":null,"telWork":null,"mobile":null,"email":"email1@email.com","altEmail":null,"differentPostalAddress":0,"birthcountryId":1,"nationalityId":null,"homeLanguageId":1,"englishSpeakingStatusId":1,"australianPr":null,"indigenousStatusId":1,"employmentStatusId":1,"stillInSecSchool":null,"schoolTypeId":1,"completedSchoolLevelId":1,"PriorEducationalAchievementFlag":"Y","disability":"N","passportNo":null,"passportExpdate":null,"visaStatusId":null,"visaNo":null,"visaExpdate":null,"usiNo":null,"signatoryText":null,"surveyContactStatusId":1,"statisticalAreaLevel1Id":null,"statisticalAreaLevel2Id":null,"userId":1 }`;

    console.log(this.dataString);
    // console.log(this.dataString2);
    this.apiService.postAPI('dev/addstudent', this.dataString).subscribe((data)=>{
      console.log(data); 
      this.router.navigate(['/admin/student-list']);

    })
  }

}
