import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

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
    return this.http.get(`${this.baseURL}/getEndpoint`).pipe(catchError(this.handleError<any>('getData')))
  }

  //generic function to get an observable by a parameter
  getDataById(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/getEndpoint/${id}`)
  }

  //generic function to get an observable by multiple parameters
  getDataByParams(id: string, apikey: string): Observable<any> {
    apikey = apikey.trim();
    const params = new HttpParams().set('id', id).set('apikeyrequestparamname', apikey);
    return this.http.get(`${this.baseURL}/getEndpoint`, {params}).pipe(catchError(this.handleError<any>('getDataByParams')))
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

  //generic function to handle error
   /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
