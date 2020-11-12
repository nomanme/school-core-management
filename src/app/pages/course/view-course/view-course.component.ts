import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courseId;
  courses;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI('dev/getcourse').subscribe((data) => {
      // console.log(data);
      // this.students=data;
      this.courses = this.getStudentFromList(this.courseId, data);
      // console.log(this.student)
    })
  }

  getStudentFromList(id, data) {
    // console.log(this.studentID)
    // console.log(data)
    return data.filter(x => x.courseId == id);
  }

}
