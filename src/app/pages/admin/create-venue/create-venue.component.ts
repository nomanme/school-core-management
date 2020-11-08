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
  ABN;
  address1;
  contactNo;
  countryId;
  effectiveDateFrom;
  effectiveDateTo;
  postCode;
  stateId;
  suburb;
  trainingOrgId;
  venueCode;
  venueName;

  allerrors='';

  error0='';
  error1='';
  error2='';
  error3='';
  error4='';
  error5='';
  error6='';
  error7='';
  error8='';
  error9='';
  error10='';
  error11='';
  error12='';
  error13='';
  errors='';

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
 
  }

  createVenue(form){ 


     if(form.value.allerrors ==''){
      this.error0 ='true'; 
      this.errors='true';
    }
    else{
      this.error0 ='';
      this.errors='false';
    }

   if(form.value.venueCode ==''){
     this.error1 ='true'; 
      this.errors='true';
     
    }
    else{
      this.error1 ='';
      this.errors='false';
     
    }

    if (this.errors != 'true'){

    // console.log(form.value);
    this.dataString=`{"venueId":"1", "venueName":"${form.value.venueName}", "venueCode":"${form.value.venueCode}",  "trainingOrgId":"${form.value.trainingOrgId}", "suburb":"${form.value.suburb}", "stateId":"${form.value.stateId}","postCode":"${form.value.postCode}", "ABN":"${form.value.ABN}", "address1":"${form.value.address1}", "contactNo":"${form.value.contactNo}", "countryId":"${form.value.countryId}", "effectiveDateFrom":"${form.value.effectiveDateFrom}", "effectiveDateTo":"${form.value.effectiveDateTo}"}`;
    console.log(this.dataString);
    this.apiService.postAPI('dev/addvenue', this.dataString).subscribe((data)=>{
      console.log(data);
      //  this.router.navigate(['/admin/list-venue']); 
    })

  }

    else{
    console.log('submit the form')
  }

  }

}
