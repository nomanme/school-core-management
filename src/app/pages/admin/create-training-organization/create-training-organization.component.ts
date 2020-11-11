import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-training-organization',
  templateUrl: './create-training-organization.component.html',
  styleUrls: ['./create-training-organization.component.css'],
})
export class CreateTrainingOrganizationComponent implements OnInit {

  gettrainingorgtype;
  gettypeofindustry;
  getstate;

  dataString;
  trainingOrgId;
  RTOCode;
  CRICOSCode;
  trainingOrgName;
  address1;
  suburb;
  stateId;
  postCode;
  RTOType;
  trainingOrgTypeCode;
  contactPerson;
  telephone;
  ABN;
  contactEmail;
  ITEmail;
  academicEmail;
  accountsEmail;
  trainingOrgURL;
  typeOfIndustryCode;
  TOID;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.apiService.getAPI3('dev/gettrainingorgtype').subscribe((data) => {
      this.gettrainingorgtype = data;
    })

    this.apiService.getAPI3('dev/gettypeofindustry').subscribe((data) => {
      this.gettypeofindustry = data;
    })

    this.apiService.getAPI3('dev/getstate').subscribe((data) => {
      this.getstate = data;
    })

  }

  createtrainingOrg(form) {

    this.dataString = `{"trainingOrgId":"1","RTOCode":"${form.value.RTOCode}", "CRICOSCode":"${form.value.CRICOSCode}", "trainingOrgName":"${form.value.trainingOrgName}", "address1":"${form.value.address1}", "suburb":"${form.value.suburb}", "postCode":"${form.value.postCode}", "contactPerson":"${form.value.contactPerson}","RTOType":"${form.value.RTOType}", "trainingOrgTypeCode":"${form.value.trainingOrgTypeCode}", "stateId":"${form.value.stateId}", "contactPerson":"${form.value.contactPerson}", "telephone":"${form.value.telephone}", "ABN":"${form.value.ABN}", "contactEmail":"${form.value.contactEmail}", "ITEmail":"${form.value.ITEmail}", "academicEmail":"${form.value.academicEmail}", "accountsEmail":"${form.value.accountsEmail}", "trainingOrgURL":"${form.value.trainingOrgURL}", "typeOfIndustryCode":"${form.value.typeOfIndustryCode}", "trainingOrgURL":"${form.value.trainingOrgURL}", "TOID":"${form.value.TOID}"}`;

    console.log(this.dataString);

    this.apiService.postAPI('dev/addunit', this.dataString).subscribe((data) => {
      console.log(data);
      // this.router.navigate(['/admin/unit-list']);
    });


  }




}
