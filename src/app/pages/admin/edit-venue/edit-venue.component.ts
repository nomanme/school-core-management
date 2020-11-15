import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css'],
})
export class EditVenueComponent implements OnInit {
  getstate;
  getcountry;
  gettrainingOrg;

  venueId;
  venue = {
    ABN: null,
    address1: null,
    contactNo: null,
    countryId: null,
    effectiveDateFrom: null,
    effectiveDateTo: null,
    postCode: null,
    stateId: null,
    suburb: null,
    trainingOrgId: null,
    venueCode: null,
    venueName: "",
  }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


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

    this.venueId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getvenue?venueId=${this.venueId}`).subscribe((data) => {
      console.log(data);
      this.venue = data[0];
      console.log(this.venue);
    });
  }



  editVenue(form) {
    console.log(form.value);
    console.log(this.venueId);
    let datajson = `{"venueId":"1","venueName":"${form.value.venueName}", "venueCode":"${form.value.venueCode}",  "trainingOrgId":"${form.value.trainingOrgId}", "suburb":"${form.value.suburb}", "stateId":"${form.value.stateId}","postCode":"${form.value.postCode}", "ABN":"${form.value.ABN}", "address1":"${form.value.address1}", "contactNo":"${form.value.contactNo}", "countryId":"${form.value.countryId}", "effectiveDateFrom":"${form.value.effectiveDateFrom}", "effectiveDateTo":"${form.value.effectiveDateTo}"}`;
    console.log(datajson);

    this.apiService.postAPI(`dev/editvenue?venueId=${this.venueId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/list-venue']);
    });
  }
}
