import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-training-organization',
  templateUrl: './view-training-organization.component.html',
  styleUrls: ['./view-training-organization.component.css']
})
export class ViewTrainingOrganizationComponent implements OnInit {

  trainingOrgId;
  trainingOrgs;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.trainingOrgId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/gettrainingOrg?trainingOrgId=${this.trainingOrgId}`).subscribe((data) => {
      console.log(data);
      this.trainingOrgs = data;
    });
  }

}
