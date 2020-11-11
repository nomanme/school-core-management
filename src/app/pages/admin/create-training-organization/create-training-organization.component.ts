import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-training-organization',
  templateUrl: './create-training-organization.component.html',
  styleUrls: ['./create-training-organization.component.css'],
})
export class CreateTrainingOrganizationComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
