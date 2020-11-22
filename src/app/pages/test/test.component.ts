import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  string = `{"visaStatusId":null,"clientId":"TEST303099","title":null,"gender":"F","firstName":"firstName Test","middleName":null,"lastName":null,"dob":"2019-01-01","buildingName":null,"flatUnitDetails":null,"streetNumber":2,"streetName":"streetName","suburb":"suburb","postCode":2066,"stateId":1,"telHome":null,"telWork":null,"mobile":null,"email":"emailemail04","altEmail":null,"differentPostalAddress":0,"birthcountryId":1,"nationalityId":null,"homeLanguageId":1,"englishSpeakingStatusId":1,"australianPr":null,"indigenousStatusId":1,"employmentStatusId":1,"stillInSecSchool":null,"schoolTypeId":1,"completedSchoolLevelId":1,"PriorEducationalAchievementFlag":"Y","disability":"N","passportNo":null,"passportExpdate":null,"visaNo":null,"visaExpdate":null,"usiNo":null,"signatoryText":null,"surveyContactStatusId":1,"statisticalAreaLevel1Id":null,"statisticalAreaLevel2Id":null,"userId":1 }`;
  outputD;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {


  }

  test() {
    console.log(this.string)
    this.apiService
      .postAPI('dev/addstudent', this.string).subscribe((data) => {
        console.log(data);
      });
  }

}
