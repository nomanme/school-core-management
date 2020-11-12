import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-training-organization',
  templateUrl: './edit-training-organization.component.html',
  styleUrls: ['./edit-training-organization.component.css']
})
export class EditTrainingOrganizationComponent implements OnInit {

  gettrainingorgtype;
  gettypeofindustry;
  getstate;


  trainingOrgId;
  trainingOrg;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

    this.trainingOrgId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getAPI(`dev/gettrainingOrg?trainingOrgId=${this.trainingOrgId}`).subscribe((data) => {
      console.log(data);
      this.trainingOrg = data[0];
      console.log(this.trainingOrg);
    });
  }

  editTrainingOrg(form) {
    console.log(form.value);
    let datajson = `{"trainingOrgId":"1","RTOCode":"${form.value.RTOCode}", "CRICOSCode":"${form.value.CRICOSCode}", "trainingOrgName":"${form.value.trainingOrgName}", "address1":"${form.value.address1}", "suburb":"${form.value.suburb}", "postCode":"${form.value.postCode}", "contactPerson":"${form.value.contactPerson}","RTOType":"${form.value.RTOType}", "trainingOrgTypeCode":"${form.value.trainingOrgTypeCode}", "stateId":"${form.value.stateId}", "contactPerson":"${form.value.contactPerson}", "telephone":"${form.value.telephone}", "ABN":"${form.value.ABN}", "contactEmail":"${form.value.contactEmail}", "ITEmail":"${form.value.ITEmail}", "academicEmail":"${form.value.academicEmail}", "accountsEmail":"${form.value.accountsEmail}", "trainingOrgURL":"${form.value.trainingOrgURL}", "typeOfIndustryCode":"${form.value.typeOfIndustryCode}", "trainingOrgURL":"${form.value.trainingOrgURL}", "TOID":"${form.value.TOID}"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/edittrainingOrg?trainingOrgId=${this.trainingOrgId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/list-training-organization']);
    });
  }


}
