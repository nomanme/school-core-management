import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  roleId;
  roles;
  role;
  
  constructor(private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.roleId= this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getroles?roleId=${this.roleId}`).subscribe((data)=>{
      console.log(data);
      this.roles=data;
    })

    
  }

}
