import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-studentenrolment',
  templateUrl: './studentenrolment.component.html',
  styleUrls: ['./studentenrolment.component.css']
})
export class StudentenrolmentComponent implements OnInit {

  StudentEnrolments;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {

    this.apiService.getAPI2('dev/getstudentenrolment').subscribe((data)=>{
      console.log(data);
      this.StudentEnrolments=data;
    })
  }

}
