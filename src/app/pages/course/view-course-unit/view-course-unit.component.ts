import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-course-unit',
  templateUrl: './view-course-unit.component.html',
  styleUrls: ['./view-course-unit.component.css']
})
export class ViewCourseUnitComponent implements OnInit {

  courseUnitId;
  courseunits;
  

  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.courseUnitId= this.activatedRoute.snapshot.paramMap.get('id');
    
    this.apiService.getAPI(`dev/getcourseunit?courseUnitId=${this.courseUnitId}`).subscribe((data)=>{
      console.log(data);
      this.courseunits=data;
    })

    
  }


}
