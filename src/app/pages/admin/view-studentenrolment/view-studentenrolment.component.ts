import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-studentenrolment',
  templateUrl: './view-studentenrolment.component.html',
  styleUrls: ['./view-studentenrolment.component.css']
})
export class ViewStudentenrolmentComponent implements OnInit {


  studentEnrolmentId;
  StudentEnrolments;
  outputD;

  courseCode;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {



    this.outputD = this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);

    // this.outputD=this.apiService.getLocalStorage('studentId');
    // console.log(this.outputD);

    // this.applicationStatusId= this.activatedRoute.snapshot.paramMap.get('id');

    // this.apiService.getAPI2(`dev/getapplicationstatus?applicationStatusId=${this.applicationStatusId}`).subscribe((data)=>{
    //   console.log(data);
    //   this.getapplicationstatus=data;
    // })

    this.studentEnrolmentId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI2(`dev/getstudentenrolment?studentEnrolmentId=${this.studentEnrolmentId}`).subscribe((data) => {
      console.log(data);

      // manualy above
      // console.log(data[0]['courseId']);
      // if (data[0]['courseId'] == 15) {
      //   this.courseCode = "FNS60217 - Advanced Diploma of Accounting";
      // }

      this.StudentEnrolments = data;
      this.StudentEnrolments = JSON.parse(this.StudentEnrolments);
    })


  }



}
