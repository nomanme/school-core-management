import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {

  studentId;
  getstudent;
  editstudent = {  PriorEducationalAchievementFlag: null,  altEmail: null,  australianPr: null,  birthcountryId: null,  buildingName: null,  clientId: null,  completedSchoolLevelId: null,  dateModified: null,  differentPostalAddress: null,  disability: null,  dob: null,  email: null,  employmentStatusId: null,  englishSpeakingStatusId: null,  firstName: null,  flatUnitDetails: null,  gender: null,  homeLanguageId: null,  indigenousStatusId: null,  lastName: null,  middleName: null,  mobile: null,  nationalityId: null,  passportExpdate: null,  passportNo: null,  postCode: null,  schoolTypeId: null,  signatoryText: null,  stateId: null,  statisticalAreaLevel1Id: null,  statisticalAreaLevel2Id: null,  stillInSecSchool: null,  streetName: null,  streetNumber: null,  studentId: null,  suburb: null,  surveyContactStatusId: null,  telHome: null,  telWork: null,  title: null,  userId: null,  usiNo: null,  visaExpdate: null,  visaNo: null,  visaStatusId: null  };
  


  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.studentId= this.activatedRoute.snapshot.paramMap.get('id');

// `dev/user?userId=${}`

    this.apiService.getAPI(`dev/getstudent?studentId=${this.studentId}`).subscribe((data)=>{
      console.log(data);
      this.editstudent=data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.editstudent)
    })
  }

  updateStudent(form){


    console.log(form.value);
    let datajson=`{"userId":"1", "clientId":"${form.value.clientId}", "PriorEducationalAchievementFlag":"${form.value.PriorEducationalAchievementFlag}", "altEmail":"${form.value.altEmail}", "australianPr":"${form.value.australianPr}", "birthcountryId": "${form.value.birthcountryId}", "buildingName": "${form.value.buildingName}",  "completedSchoolLevelId": "${form.value.completedSchoolLevelId}", "differentPostalAddress": "${form.value.differentPostalAddress}", "disability": "${form.value.disability}", "dob": "${form.value.dob}", "email":"${form.value.email}", "employmentStatusId": "${form.value.employmentStatusId}", "englishSpeakingStatusId": "${form.value.englishSpeakingStatusId}", "firstName": "${form.value.firstName}", "flatUnitDetails": "${form.value.flatUnitDetails}", "gender": "${form.value.gender}", "homeLanguageId": "${form.value.homeLanguageId}", "indigenousStatusId": "${form.value.indigenousStatusId}", "lastName": "${form.value.lastName}", "middleName": "${form.value.middleName}", "mobile": "${form.value.mobile}", "nationalityId": "${form.value.nationalityId}", "passportExpdate": "${form.value.passportExpdate}", "passportNo": "${form.value.passportNo}", "postCode": "${form.value.postCode}", "schoolTypeId": "${form.value.schoolTypeId}", "signatoryText": "${form.value.signatoryText}", "stateId": "${form.value.stateId}", "statisticalAreaLevel1Id": "${form.value.statisticalAreaLevel1Id}", "statisticalAreaLevel2Id": "${form.value.statisticalAreaLevel2Id}", "stillInSecSchool": "${form.value.stillInSecSchool}", "streetName": "${form.value.streetName}", "streetnull": "${form.value.streetnull}", "suburb": "${form.value.suburb}", "surveyContactStatusId": "${form.value.surveyContactStatusId}", "telHome": "${form.value.telHome}", "telWork": "${form.value.telWork}", "title": "${form.value.title}", "usiNo": "${form.value.usiNo}", "visaExpdate": "${form.value.visaExpdate}", "visaNo": "${form.value.visaNo}", "visaStatusId": "${form.value.visaStatusId}"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/editstudent?studentId=${this.studentId}`, datajson).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/admin/student-list']);

  })
  }
}