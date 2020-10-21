import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student;
  outputD;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {

    this.outputD=this.apiService.getLocalStorage('studentId');
    console.log(this.outputD);

    this.apiService.getAPI('dev/getstudent').subscribe((data)=>{
      console.log(data);
      this.student=data;
      this.student=JSON.parse(this.student);
    })


    
  }
 

}
