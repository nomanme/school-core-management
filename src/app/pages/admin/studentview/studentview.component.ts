import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {

  studentID;
  students;
  getstudent;

  
  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentID= this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getstudent?studentId=${this.studentID}`).subscribe((data)=>{
      console.log(data);
      // this.students=data;
      this.students=data;
      // console.log(this.student)
    })

    
  }



}
