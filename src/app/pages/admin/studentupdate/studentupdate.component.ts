import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {
  schltype = false;
  Visa = false;
  disable = false;
  PostalDetail = false;

  Users;
  getvisastatus;
  getcountry;
  getnationality;
  getlanguage;
  getenglishspeakingstatus;
  getstate;
  getemploymentstatus;
  getindigenousstatus;
  getschoollevel;
  getsurveycontactstatus;
  getschooltype;
  getclientid;
  getdisability;

  addstudentpostaldetails;
  studentPostalDetailsId;





  outputD;
  outputD2;
  studentId;
  getstudent;
  editstudent = { PriorEducationalAchievementFlag: null, altEmail: null, australianPr: null, birthcountryId: null, buildingName: null, clientId: null, completedSchoolLevelId: null, dateModified: null, differentPostalAddress: null, disability: null, dob: null, email: null, employmentStatusId: null, englishSpeakingStatusId: null, firstName: null, flatUnitDetails: null, gender: null, homeLanguageId: null, indigenousStatusId: null, lastName: null, middleName: null, mobile: null, nationalityId: null, passportExpdate: null, passportNo: null, postCode: null, schoolTypeId: null, signatoryText: null, stateId: null, statisticalAreaLevel1Id: null, statisticalAreaLevel2Id: null, stillInSecSchool: null, streetName: null, streetNumber: null, studentId: null, suburb: null, surveyContactStatusId: null, telHome: null, telWork: null, title: null, userId: null, usiNo: null, visaExpdate: null, visaNo: null, visaStatusId: null };


  editstudentpostal = { buildingName: null, flatUnitDetails: null, streetName: null, streetNumber: null, suburb: null, stateId: null, postCode: null, pobox: null };


  dataString;




  errors = '';
  allerrors = '';
  error0 = '';
  error = '';
  errorfirstname = '';
  errordob = '';
  erroremail = '';
  errorbirthcountry = '';
  errorgender = '';
  errorindigenousStatus = '';
  errorhomelang = '';
  erroremploymentStatus = '';
  errorschoolLevel = '';
  errordisability = '';
  errorpriorEducation = '';
  erroraustralianPr = '';
  errorsurvey = '';
  errorstate = '';
  errorstreetNumber = '';
  errorstreetName = '';
  errorsuburb = '';
  errorpostcode = '';
  errordifferentPostalAddress = '';

  errorMessage = '';

  errorCodes: { firstName: null };





  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {


    this.outputD = this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);

    this.apiService.getAPI('dev/getclientid').subscribe((data) => {
      this.getclientid = data;
      this.getclientid = this.getclientid.replace('clientId:', '');
      console.log(this.getclientid);
    });

    this.apiService.getAPI3('dev/getvisastatus').subscribe((data) => {
      console.log(data);
      this.getvisastatus = data;
    });

    this.apiService.getAPI3('dev/getcountry').subscribe((data) => {
      // console.log(data);
      this.getcountry = data;
    });

    this.apiService.getAPI3('dev/getnationality').subscribe((data) => {
      // console.log(data);
      this.getnationality = data;
    });

    this.apiService.getAPI3('dev/getlanguage').subscribe((data) => {
      // console.log(data);
      this.getlanguage = data;
    });

    this.apiService.getAPI3('dev/getenglishspeakingstatus').subscribe((data) => {
      // console.log(data);
      this.getenglishspeakingstatus = data;
    });

    this.apiService.getAPI3('dev/getstate').subscribe((data) => {
      // console.log(data);
      this.getstate = data;
    });

    this.apiService.getAPI3('dev/getemploymentstatus').subscribe((data) => {
      // console.log(data);
      this.getemploymentstatus = data;
    });

    this.apiService.getAPI3('dev/getindigenousstatus').subscribe((data) => {
      // console.log(data);
      this.getindigenousstatus = data;
    });

    this.apiService.getAPI3('dev/getschoollevel').subscribe((data) => {
      // console.log(data);
      this.getschoollevel = data;
    });

    this.apiService.getAPI3('dev/getsurveycontactstatus').subscribe((data) => {
      // console.log(data);
      this.getsurveycontactstatus = data;
    });

    this.apiService.getAPI3('dev/getschooltype').subscribe((data) => {
      this.getschooltype = data;
    });

    this.apiService.getAPI3('dev/getdisability').subscribe((data) => {
      this.getdisability = data;
    });



    this.studentId = this.activatedRoute.snapshot.paramMap.get('id');

    // `dev/user?userId=${}`

    this.apiService.getAPI(`dev/getstudent?studentId=${this.studentId}`).subscribe((data) => {
      console.log(data);
      this.editstudent = data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.editstudent)
      // this.editstudent = JSON.parse(this.editstudent['msg']);

      // this.outputD = JSON.parse(this.outputD['msg']);
    });

    this.apiService.getAPI2(`dev/getstudentpostaldetails?studentId=${this.studentId}`).subscribe((data) => {
      console.log(data[0]['streetName']);
      this.editstudentpostal = data[0];
      // this.student=this.getStudentFromList(this.studentID, data);
      console.log(this.editstudentpostal)
      // this.editstudent = JSON.parse(this.editstudent['msg']);

      // this.outputD = JSON.parse(this.outputD['msg']);
    });
  }



  showschltype() {
    this.schltype = true;
  }
  hideschltype() {
    this.schltype = false;
  }
  ShowVisa() {
    this.Visa = true;
  }
  HideVisa() {
    this.Visa = false;
  }
  ShowDisablity() {
    this.disable = true;
  }
  HideDisablity() {
    this.disable = false;
  }
  ShowStudentPostal() {
    this.PostalDetail = true;
  }
  HideStudentPostal() {
    this.PostalDetail = false;
  }



  updateStudent(form) {



    if (form.value.allerrors == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.firstName == '') {
      this.errorfirstname = 'true';
      this.errors = 'true';
    } else {
      this.errorfirstname = '';
      this.errors = 'false';
    }
    console.log(form.value.dob);
    if (form.value.dob == '') {
      this.errordob = 'true';
      this.errors = 'true';
    } else {
      this.errordob = '';
      this.errors = 'false';
    }

    if (form.value.email == '') {
      this.erroremail = 'true';
      this.errors = 'true';
    } else {
      this.erroremail = '';
      this.errors = 'false';
    }

    if (form.value.birthcountryId == '') {
      this.errorbirthcountry = 'true';
      this.errors = 'true';
    } else {
      this.errorbirthcountry = '';
      this.errors = 'false';
    }

    if (form.value.gender == '') {
      this.errorgender = 'true';
      this.errors = 'true';
    } else {
      this.errorgender = '';
      this.errors = 'false';
    }

    if (form.value.indigenousStatusId == '') {
      this.errorindigenousStatus = 'true';
      this.errors = 'true';
    } else {
      this.errorindigenousStatus = '';
      this.errors = 'false';
    }

    if (form.value.homeLanguageId == '') {
      this.errorhomelang = 'true';
      this.errors = 'true';
    } else {
      this.errorhomelang = '';
      this.errors = 'false';
    }

    if (form.value.employmentStatusId == '') {
      this.erroremploymentStatus = 'true';
      this.errors = 'true';
    } else {
      this.erroremploymentStatus = '';
      this.errors = 'false';
    }

    if (form.value.completedSchoolLevelId == '') {
      this.errorschoolLevel = 'true';
      this.errors = 'true';
    } else {
      this.errorschoolLevel = '';
      this.errors = 'false';
    }

    if (form.value.disability == '') {
      this.errordisability = 'true';
      this.errors = 'true';
    } else {
      this.errordisability = '';
      this.errors = 'false';
    }

    if (form.value.PriorEducationalAchievementFlag == '') {
      this.errorpriorEducation = 'true';
      this.errors = 'true';
    } else {
      this.errorpriorEducation = '';
      this.errors = 'false';
    }

    if (form.value.australianPr == '') {
      this.erroraustralianPr = 'true';
      this.errors = 'true';
    } else {
      this.erroraustralianPr = '';
      this.errors = 'false';
    }

    // if (error == '') {
    // }

    if (form.value.surveyContactStatusId == '') {
      this.errorsurvey = 'true';
      this.errors = 'true';
    } else {
      this.errorsurvey = '';
      this.errors = 'false';
    }

    if (form.value.stateId == '') {
      this.errorstate = 'true';
      this.errors = 'true';
    } else {
      this.errorstate = '';
      this.errors = 'false';
    }

    if (form.value.streetNumber == '') {
      this.errorstreetNumber = 'true';
      this.errors = 'true';
    } else {
      this.errorstreetNumber = '';
      this.errors = 'false';
    }

    if (form.value.streetName == '') {
      this.errorstreetName = 'true';
      this.errors = 'true';
    } else {
      this.errorstreetName = '';
      this.errors = 'false';
    }

    if (form.value.suburb == '') {
      this.errorsuburb = 'true';
      this.errors = 'true';
    } else {
      this.errorsuburb = '';
      this.errors = 'false';
    }

    if (form.value.postCode == '') {
      this.errorpostcode = 'true';
      this.errors = 'true';
    } else {
      this.errorpostcode = '';
      this.errors = 'false';
    }

    if (form.value.differentPostalAddress == '') {
      this.errordifferentPostalAddress = 'true';
      this.errors = 'true';
    } else {
      this.errordifferentPostalAddress = '';
      this.errors = 'false';
    }
    if (this.errors != 'true') {






      //console.log(form.value);
      let datajson = `{"userId":"1", "clientId":"${form.value.clientId}", "PriorEducationalAchievementFlag":"${form.value.PriorEducationalAchievementFlag}", "altEmail":"${form.value.altEmail}", "australianPr":"${form.value.australianPr}", "birthcountryId": "${form.value.birthcountryId}", "buildingName": "${form.value.buildingName}",  "completedSchoolLevelId": "${form.value.completedSchoolLevelId}", "differentPostalAddress": "${form.value.differentPostalAddress}", "disability": "${form.value.disability}", "dob": "${form.value.dob}", "email":"${form.value.email}", "employmentStatusId": "${form.value.employmentStatusId}", "englishSpeakingStatusId": "${form.value.englishSpeakingStatusId}", "firstName": "${form.value.firstName}", "flatUnitDetails": "${form.value.flatUnitDetails}", "gender": "${form.value.gender}", "homeLanguageId": "${form.value.homeLanguageId}", "indigenousStatusId": "${form.value.indigenousStatusId}", "lastName": "${form.value.lastName}", "middleName": "${form.value.middleName}", "mobile": "${form.value.mobile}", "nationalityId": "${form.value.nationalityId}", "passportExpdate": "${form.value.passportExpdate}", "passportNo": "${form.value.passportNo}", "postCode": "${form.value.postCode}", "schoolTypeId": "${form.value.schoolTypeId}", "signatoryText": "${form.value.signatoryText}", "stateId": "${form.value.stateId}", "statisticalAreaLevel1Id": "${form.value.statisticalAreaLevel1Id}", "statisticalAreaLevel2Id": "${form.value.statisticalAreaLevel2Id}", "stillInSecSchool": "${form.value.stillInSecSchool}", "streetName": "${form.value.streetName}", "streetnull": "${form.value.streetnull}", "suburb": "${form.value.suburb}", "surveyContactStatusId": "${form.value.surveyContactStatusId}", "telHome": "${form.value.telHome}", "telWork": "${form.value.telWork}", "title": "${form.value.title}", "usiNo": "${form.value.usiNo}", "visaExpdate": "${form.value.visaExpdate}", "visaNo": "${form.value.visaNo}", "visaStatusId": "${form.value.visaStatusId}"}`;
      console.log(datajson);
      this.apiService.postAPI(`dev/editstudent?studentId=${this.studentId}`, datajson).subscribe((data) => {
        console.log(data);



        if (form.value.differentPostalAddress == "Y") {
          //Postal
          let datajson = `{"userId":"1", "studentId":"${this.outputD}", "buildingName":"${form.value.postalbuildingName}", "flatUnitDetails":"${form.value.postalflatUnitDetails}", "streetName":"${form.value.streetName}", "streetNumber": "${form.value.streetNumber}", "suburb": "${form.value.postalsuburb}", "stateId": ${form.value.postalstateId}, "postCode": "${form.value.postalpostCode}", "pobox": "${form.value.postalpobox}"}`;
          console.log(datajson);
          this.apiService.postAPI(`dev/editstudentpostaldetails?studentPostalDetailsId=${this.studentPostalDetailsId}`, datajson).subscribe((data) => {
            console.log(data);
          });
        }


        this.router.navigate(['/admin/student-list']);

      });
    }

    else {
      console.log('There are error');
    }
  }
}