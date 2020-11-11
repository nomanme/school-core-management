import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.css']
})
export class CreateUnitComponent implements OnInit {

  getfieldofeducation;
  getschooltype;
  getspecificfunding;



  dataString
  units;

  unitId;
  unitCode;
  vetUnitCode;
  unitName;
  deliveryMode;
  scheduledNominalHours;
  fieldofEducationId;
  tuitionFee;
  vetFlag;
  schoolTypeId;
  specificFundingId;

  // error0 = '';
  // error1 = '';
  // error2 = '';
  // error3 = '';
  // error4 = '';
  // error5 = '';

  // errors = '';

  constructor(private apiService: ApiService, private router: Router) { }

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

  }

  createUnit(form) {

    this.dataString = `{"unitId":"1","unitCode":"${form.value.unitCode}", "vetUnitCode":"${form.value.vetUnitCode}", "unitName":"${form.value.unitName}", "deliveryMode":"${form.value.deliveryMode}", "scheduledNominalHours":"${form.value.scheduledNominalHours}", "tuitionFee":"${form.value.tuitionFee}", "vetFlag":"${form.value.vetFlag}", "schoolTypeId":"${form.value.schoolTypeId}", "specificFundingId":"${form.value.specificFundingId}"}`;

    console.log(this.dataString);

    this.apiService.postAPI('dev/addunit', this.dataString).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/unit-list']);
    });


  }


}
