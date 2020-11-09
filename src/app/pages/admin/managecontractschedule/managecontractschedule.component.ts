import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managecontractschedule',
  templateUrl: './managecontractschedule.component.html',
  styleUrls: ['./managecontractschedule.component.css']
})
export class ManagecontractscheduleComponent implements OnInit {


  clenderType;
  state;
  FundingSource;
  ContractCode;
  ScheduleDescription;
  add;
  

  error0='';
  error1='';
  error2='';
  error3='';
  error4='';
  error5='';
  error6='';
  error7='';
  error8='';

  errors='';

  constructor() { }

  ngOnInit(): void {
  }

  createContract(form){


    if(form.value.clenderType ==''){
      this.error0 ='true'; 
      this.errors='true';
     
    }
    else{
      this.error0 ='';
      this.errors='false';
     
    }



  }

}
