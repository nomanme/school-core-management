import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 
    
    'ScreetKey': 'hJK1oEqdEQa12kOF39hanKJD8ZSTwRMVkxXjZ0PR',
    'AccessKey': 'AKIAZ4AE4SJSAH6M5B6B',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Host': 'w1uzabbs5b.execute-api.ap-southeast-2.amazonaws.com',
    'X-Amz-Date': '20200920T094727Z',
    'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIAZ4AE4SJSAH6M5B6B/20200920/ap-southeast-2/execute-api/aws4_request, SignedHeaders=accesskey;content-type;host;screetkey;x-amz-date, Signature=f49a50aa6f92579b46547c5ae3e34c54b0d15df5c26c60fc95ceaca0399f3085',
    'Cache-Control': 'no-cache'
   })
};



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // headers = new HttpHeaders({
  //   'ScreetKey': 'hJK1oEqdEQa12kOF39hanKJD8ZSTwRMVkxXjZ0PR',
  //   'AccessKey': 'AKIAZ4AE4SJSAH6M5B6B',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Host': 'amogwgy14a.execute-api.ap-southeast-2.amazonaws.com',
  //   'X-Amz-Date': '20200915T122725Z',
  //   'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIAZ4AE4SJSAH6M5B6B/20200915/ap-southeast-2/execute-api/aws4_request, SignedHeaders=accesskey;content-type;host;screetkey;x-amz-date, Signature=90c575d4ef4379cd809103b6bdf5458bdd1be1ef79871fdced8560119deb0d05'
  // });
  // api_url = 'https://w1uzabbs5b.execute-api.ap-southeast-2.amazonaws.com';
  // api_url = 'https://bhorf007xe.execute-api.ap-southeast-2.amazonaws.com/https://bhorf007xe.execute-api.ap-southeast-2.amazonaws.com';
  api_url = 'https://bhorf007xe.execute-api.ap-southeast-2.amazonaws.com';
  constructor(private httpClient: HttpClient) { }


  public getUser(url='dev/user') {
    // console.log(`${this.api_url}/${url}`)
    return this.httpClient.get(`${this.api_url}/${url}`);
  }

  public postRole(url, data) {
    return this.httpClient.post(`${this.api_url}/${url}`, data);
  }

  public getAPI(url) {
    return this.httpClient.get(`${this.api_url}/${url}`);
  }
  public postAPI(url, data) {
    return this.httpClient.post(`${this.api_url}/${url}`, data);
  }

  public putAPI(url, data) {
    return this.httpClient.put(`${this.api_url}/${url}`, data);
  }

}
