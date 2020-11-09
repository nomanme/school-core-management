import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerdocumentchecklist',
  templateUrl: './offerdocumentchecklist.component.html',
  styleUrls: ['./offerdocumentchecklist.component.css'],
})
export class OfferdocumentchecklistComponent implements OnInit {
  docname;
  doctype;
  storigin;
  adminofferdocaddbtn;

  error0 = '';
  error1 = '';
  error2 = '';
  error3 = '';
  error4 = '';
  error5 = '';
  error6 = '';
  error7 = '';
  error8 = '';

  errors = '';

  constructor() {}

  ngOnInit(): void {}

  createDocument(form) {
    if (form.value.docname == '') {
      this.error0 = 'true';
      this.errors = 'true';
    } else {
      this.error0 = '';
      this.errors = 'false';
    }
  }
}
console.log();
