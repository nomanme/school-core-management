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

  studentPostalDetailsId;
  studentpostal;
  getstudent;
  getclientid;
  outputD;


  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.outputD = this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);

    this.apiService.getAPI('dev/getclientid').subscribe((data) => {
      this.getclientid = data;
      console.log(`getClinetIDdata ${this.getclientid}`)
    })



    this.studentID = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getstudent?studentId=${this.studentID}`).subscribe((data) => {
      console.log(data);
      this.students = data;
      // this.students = JSON.parse(this.students);

    });

    this.studentPostalDetailsId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI2(`dev/getstudentpostaldetails?studentPostalDetailsId=${this.students}`).subscribe((data2) => {
      console.log(data2);
      this.studentpostal = data2;
    });


  }



}
