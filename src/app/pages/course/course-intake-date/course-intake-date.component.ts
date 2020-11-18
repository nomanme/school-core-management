import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-course-intake-date',
  templateUrl: './course-intake-date.component.html',
  styleUrls: ['./course-intake-date.component.css']
})
export class CourseIntakeDateComponent implements OnInit {

  CourseIntakeDate;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAPI2('dev/getcourseintakedate').subscribe((data) => {
      console.log(data);
      this.CourseIntakeDate = data;
    });
  }

}
