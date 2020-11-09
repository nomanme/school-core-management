import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
})
export class AddcontactComponent implements OnInit {
  ContractCode;
  ContractDescription;
  adminaddcontactbtn;

  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  errors = '';

  constructor() {}

  ngOnInit(): void {}

  createContact(form) {
    if (form.value.ContractCode == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }
  }
}
