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
  studentDisabilityId;
  studentdistabilty;
  disabilityId;
  studentpostal;
  getstudent;
  getclientid;
  outputD;


  myString = '';



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



    this.studentDisabilityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getAPI2(`dev/getstudentdisability?studentId=${this.studentID}`).subscribe((data) => {
      // var test = '';
      // console.log(data['disabilityId']);
      // test = test + '' + data[0]['disabilityId'];
      // for (let disability of data[0]['disabilityId']) {
      //   // console.log(data);
      //   this.studentdistabilty = data[0];
      //   var firstKeyValue = this.studentdistabilty[Object.keys(this.studentdistabilty)[0]]; //"Steve"
      //   console.log(firstKeyValue + ',');
      // }
      var str = ''
      console.log(data);
      this.studentdistabilty = data;
      for (let disability of this.studentdistabilty) {
        const values = Object.keys(disability).map(key => disability[key]);
        const commaJoinedValues = values[5] + ' - ' + values[7];

        str = str + ', ' + commaJoinedValues;
        // console.log(str);
        // console.log(commaJoinedValues);
      }
      // console.log(this.studentdistabilty);
      // console.log(test);

      this.myString = str.substring(1);
      console.log(this.myString);
    });





    // this.studentDisabilityId = this.activatedRoute.snapshot.paramMap.get('id');

    // this.apiService.getAPI2(`dev/getstudentdisability?studentId=${studentID}`).subscribe((data) => {
    //   console.log(data);
    //   this.studentdistabilty = data;
    //   console.log(studentdistabilty);
    // });


    this.studentPostalDetailsId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI2(`dev/getstudentpostaldetails?studentId=${this.studentID}`).subscribe((data2) => {
      console.log(data2);
      this.studentpostal = data2;
    });


  }



}
