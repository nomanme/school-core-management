import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-training-organizations',
  templateUrl: './training-organizations.component.html',
  styleUrls: ['./training-organizations.component.css']
})
export class TrainingOrganizationsComponent implements OnInit {

  trainingOrgs;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAPI('dev/gettrainingOrg').subscribe((data) => {
      console.log(data);
      this.trainingOrgs = data;
    });
  }

}
