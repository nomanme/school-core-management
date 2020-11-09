import { CreateclasstimetableComponent } from './../../timetable/createclasstimetable/createclasstimetable.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursesite',
  templateUrl: './coursesite.component.html',
  styleUrls: ['./coursesite.component.css']
})
export class CoursesiteComponent implements OnInit {


  CourseSiteId;
  CourseSiteName;
  CourseActive;
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


  CreateCoure(form){

    if(form.value.CourseSiteId ==''){
      this.error0 ='true'; 
      this.errors='true';
     
    }
    else{
      this.error0 ='';
      this.errors='false';
     
    }
  }
}
