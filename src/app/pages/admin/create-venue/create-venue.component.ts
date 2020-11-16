import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-venue',
  templateUrl: './create-venue.component.html',
  styleUrls: ['./create-venue.component.css'],
})
export class CreateVenueComponent implements OnInit {
  getstate;
  getcountry;
  gettrainingOrg;

  venues;
  dataString;
  ABN;
  address1;
  contactNo = '';
  countryId;
  effectiveDateFrom;
  effectiveDateTo;
  postCode = '';
  stateId;
  suburb;
  trainingOrgId = '';
  venueCode = '';
  venueName;

  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  error4 = '';

  errors = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAPI3('dev/getstate').subscribe((data) => {
      this.getstate = data;
    });

    this.apiService.getAPI3('dev/getcountry').subscribe((data) => {
      this.getcountry = data;
    });

    this.apiService.getAPI('dev/gettrainingOrg').subscribe((data) => {
      this.gettrainingOrg = data;
    });
  }

  createVenue(form) {
    if (form.value.venueCode == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }

    if (form.value.trainingOrgId == '') {
      this.error1 = 'true';
      this.errors = 'true';
    } else {
      this.error1 = '';
      this.errors = 'false';
    }

    if (form.value.contactNo == '') {
      this.error2 = 'true';
      this.errors = 'true';
    } else {
      this.error2 = '';
      this.errors = 'false';
    }
    if (form.value.postCode == '') {
      this.error3 = 'true';
      this.errors = 'true';
    } else {
      this.error3 = '';
      this.errors = 'false';
    }

    if (this.errors != 'true') {
      // console.log(form.value);
      this.dataString = `{"venueId":"1", "venueName":"${form.value.venueName}", "venueCode":"${form.value.venueCode}",  "trainingOrgId":"${form.value.trainingOrgId}", "suburb":"${form.value.suburb}", "stateId":"${form.value.stateId}","postCode":"${form.value.postCode}", "ABN":"${form.value.ABN}", "address1":"${form.value.address1}", "contactNo":"${form.value.contactNo}", "countryId":"${form.value.countryId}", "effectiveDateFrom":"${form.value.effectiveDateFrom}", "effectiveDateTo":"${form.value.effectiveDateTo}"}`;
      console.log(this.dataString);
      this.apiService
        .postAPI('dev/addvenue', this.dataString)
        .subscribe((data) => {
          console.log(data);
          console.log(this.contactNo);
          this.router.navigate(['/admin/list-venue']);
        });
    } else {
      console.log('submit the form');
    }
  }
}
