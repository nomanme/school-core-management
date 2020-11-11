import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit {
  getfieldofeducation;
  getschooltype;
  getspecificfunding;


  unitId;
  unit;
  venueId;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getAPI3('dev/getfieldofeducation').subscribe((data) => {
      this.getfieldofeducation = data;
    })

    this.apiService.getAPI3('dev/getschooltype').subscribe((data) => {
      this.getschooltype = data;
    })

    this.apiService.getAPI3('dev/getspecificfunding').subscribe((data) => {
      this.getspecificfunding = data;
    })

    this.unitId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getAPI(`dev/getunit?unitId=${this.unitId}`).subscribe((data) => {
      console.log(data);
      this.unit = data[0];
      console.log(this.unit);
    });
  }

  editUnit(form) {
    console.log(form.value);
    let datajson = `{"unitId":"1","unitCode":"${form.value.unitCode}", "vetUnitCode":"${form.value.vetUnitCode}", "unitName":"${form.value.unitName}", "deliveryMode":"${form.value.deliveryMode}", "scheduledNominalHours":"${form.value.scheduledNominalHours}", "fieldofEducationId":"${form.value.fieldofEducationId}", "tuitionFee":"${form.value.tuitionFee}", "vetFlag":"${form.value.vetFlag}", "schoolTypeId":"${form.value.schoolTypeId}", "specificFundingId":"${form.value.specificFundingId}"}`;
    console.log(datajson);
    this.apiService.postAPI(`dev/editunit?unitId=${this.unitId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/unit-list']);
    });
  }

}
