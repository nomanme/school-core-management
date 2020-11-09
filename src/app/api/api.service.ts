import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    ScreetKey: 'hJK1oEqdEQa12kOF39hanKJD8ZSTwRMVkxXjZ0PR',
    AccessKey: 'AKIAZ4AE4SJSAH6M5B6B',
    'Content-Type': 'application/x-www-form-urlencoded',
    Host: 'w1uzabbs5b.execute-api.ap-southeast-2.amazonaws.com',
    'X-Amz-Date': '20200920T094727Z',
    Authorization:
      'AWS4-HMAC-SHA256 Credential=AKIAZ4AE4SJSAH6M5B6B/20200920/ap-southeast-2/execute-api/aws4_request, SignedHeaders=accesskey;content-type;host;screetkey;x-amz-date, Signature=f49a50aa6f92579b46547c5ae3e34c54b0d15df5c26c60fc95ceaca0399f3085',
    'Cache-Control': 'no-cache',
  }),
};

@Injectable({
  providedIn: 'root',
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
  // api_url = 'https://bhorf007xe.execute-api.ap-southeast-2.amazonaws.com';

  api_url = 'https://0p8y7okgr2.execute-api.ap-southeast-2.amazonaws.com';
  api_url2 = 'https://2olljr3w8i.execute-api.ap-southeast-2.amazonaws.com';
  api_url3 = 'https://9ivnf9l6xc.execute-api.ap-southeast-2.amazonaws.com';
  redirectUrl: string;

  constructor(private httpClient: HttpClient) {}
  public getUser(url = 'dev/getuser') {
    // console.log(`${this.api_url}/${url}`)
    return this.httpClient.get(`${this.api_url}/${url}`);
  }

  public postRole(url, data) {
    return this.httpClient.post(`${this.api_url}/${url}`, data);
  }

  //API-1
  public getAPI(url) {
    return this.httpClient.get(`${this.api_url}/${url}`);
  }
  public postAPI(url, data) {
    return this.httpClient.post(`${this.api_url}/${url}`, data);
  }

  public putAPI(url, data) {
    return this.httpClient.put(`${this.api_url}/${url}`, data);
  }

  public delAPI(url) {
    return this.httpClient.get(`${this.api_url}/${url}`);
  }

  //API-2
  public getAPI2(url2) {
    return this.httpClient.get(`${this.api_url2}/${url2}`);
  }

  public postAPI2(url2, data) {
    return this.httpClient.post(`${this.api_url2}/${url2}`, data);
  }

  public putAPI2(url2, data) {
    return this.httpClient.put(`${this.api_url2}/${url2}`, data);
  }

  public delAPI2(url2) {
    return this.httpClient.get(`${this.api_url2}/${url2}`);
  }

  //API-3
  public getAPI3(url3) {
    return this.httpClient.get(`${this.api_url3}/${url3}`);
  }

  public postAPI3(url3, data) {
    return this.httpClient.post(`${this.api_url3}/${url3}`, data);
  }

  public putAPI3(url3, data) {
    return this.httpClient.put(`${this.api_url3}/${url3}`, data);
  }

  public delAPI3(url3) {
    return this.httpClient.get(`${this.api_url3}/${url3}`);
  }

  public setLocalStorage(data, key) {
    localStorage.setItem(`${data}`, key);
  }

  public getLocalStorage(key) {
    return localStorage.getItem(key);
  }

  public auth(user) {
    let username = user.username;
    return this.httpClient.post(`${this.api_url}/auth`, user).pipe(
      map((user) => {
        console.log(user['error']);
        if (user['error'] == false) {
          this.setToken(
            user['data'][0]['username'],
            user['data'][0]['role'],
            user['data'][0]['id']
          );
        }
        return user;
      })
    );
  }

  setToken(token: string, userType, userID) {
    localStorage.setItem('token', token);
    localStorage.setItem('userID', userID);
    if (userType == 1) {
      localStorage.setItem('userType', 'Admin');
    } else {
      localStorage.setItem('userType', 'User');
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getTokenID() {
    return localStorage.getItem('userID');
  }
  getuserType() {
    return localStorage.getItem('userType');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('userID');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
  isAdmin() {
    const userType = this.getuserType();
    if (userType == 'Admin') {
      return true;
    }
    return false;
  }
}
