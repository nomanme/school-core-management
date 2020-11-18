import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-course-intake-date',
  templateUrl: './view-course-intake-date.component.html',
  styleUrls: ['./view-course-intake-date.component.css']
})
export class ViewCourseIntakeDateComponent implements OnInit {

  courseIntakeDateId;
  CourseIntakeDate;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.courseIntakeDateId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI2(`dev/getcourseintakedate?courseIntakeDateId=${this.courseIntakeDateId}`).subscribe((data) => {
      console.log(data);
      this.CourseIntakeDate = data;
    });
  }

}
