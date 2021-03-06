import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses;
  getcourseunit;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      console.log(data);
      this.courses = data;
      // this.courses = JSON.parse(this.courses);
    });



    this.apiService.getAPI('dev/getcourseunit').subscribe((data) => {
      console.log(data);
      this.getcourseunit = data;
      // this.courses = JSON.parse(this.courses);
    });
  }

}
