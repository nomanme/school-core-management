import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-course-unit',
  templateUrl: './course-unit.component.html',
  styleUrls: ['./course-unit.component.css']
})
export class CourseUnitComponent implements OnInit {

  courseunits;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {

    this.apiService.getAPI('dev/getcourseunit').subscribe((data)=>{
      console.log(data);
      this.courseunits=data;
    })
  }

}
