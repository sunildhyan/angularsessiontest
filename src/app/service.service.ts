import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private setbaseUrl = 'http://172.16.3.204:8080/test/data/set';
  private getbaseUrl = 'http://172.16.3.204:8080/test/data/get';
  constructor(private http: HttpClient) {}
  // Method to get data from the API with credentials
  getData(): Observable<any> {
    const options = {
      withCredentials: true, // Include credentials (cookies, HTTP authentication)
    };
    return this.http.get<any>(this.getbaseUrl, options); // This returns an observable of the data
  }
  // Method to post data (POST request) with credentials
  postData(data: any): Observable<any> {
    const options = {
      withCredentials: true, // Include credentials (cookies, HTTP authentication)
    };
    return this.http.post<any>(this.setbaseUrl, data, options);
  }
}
