import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-venue',
  templateUrl: './create-venue.component.html',
  styleUrls: ['./create-venue.component.css']
})
export class CreateVenueComponent implements OnInit {

  venues;
  dataString;
  ABN:null;
  address1;
  contactNo;
  countryId:1;
  effectiveDateFrom: null;
  effectiveDateTo: null;
  postCode;
  stateId: 1;
  suburb:null;
  trainingOrgId: 1;
  venueCode;
  venueName;

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createVenue(form){ 

    // console.log(form.value);
    this.dataString=`{"venueId":"1", "venueName":"${form.value.venueName}", "venueCode":"${form.value.venueCode}",  "trainingOrgId":"${form.value.trainingOrgId}", "suburb":"${form.value.suburb}", "stateId":"${form.value.stateId}","postCode":"${form.value.postCode}", "ABN":"${form.value.ABN}", "address1":"${form.value.address1}", "contactNo":"${form.value.contactNo}", "countryId":"${form.value.countryId}", "effectiveDateFrom":"${form.value.effectiveDateFrom}", "effectiveDateTo":"${form.value.effectiveDateTo}"}`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/venue', this.dataString).subscribe((data)=>{
      console.log(data);
      //  this.router.navigate(['/admin/list-venue']); 
    })
  }

}
