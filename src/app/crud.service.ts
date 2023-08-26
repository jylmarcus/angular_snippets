import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //import HttpClientModule in app.module
  //inject HttpClient into service
  constructor(private http: HttpClient) { }

  //define baseURL or URI as per proxy
  private baseURL = `http://localhost:8080/api`

  //generic function to get an observable
  getData(): Observable<any> {
    return this.http.get(`${this.baseURL}/getEndpoint`)
  }

  //generic function to get an observable by a parameter
  getDataById(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/getEndpoint/${id}`)
  }

  //it is also possible to return an observable of custom type
  //replace string with the required type
  getDataOfString(): Observable<string> {
    return this.http.get<string>(`${this.baseURL}/getEndpoint`)
  }

  //generic function for posting data
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/postEndpoint`, data)
  }

  //generic function for updating data
  putData(data: any, id: string): Observable<any> {
    return this.http.put(`${this.baseURL}/putEndpoint/${id}`, data)
  }

  //generic function for deleting data
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/deleteEndpoint/${id}`)
  }
}
