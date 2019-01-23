import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

/*export interface Quote {
  content: string;
  _id: string;
}
*/
const API_URL: string = 'http://localhost:8000/api';

@Injectable(/*{  providedIn: 'root'}*/)
export class QuoteService{
	//private headers;

	constructor(private http: Http){
		//this.init();
	}

	/*async init() {
      this.headers = new Headers({
          Authorization: 'Bearer'
      });
  }*/

	/*getQuotes(): Observable<any> {
      return this.http.get(API_URL + '/quotes')
      .map(res => res.json().data);
  }*/

	getQuotes(): Observable<any> {
    return this.http.get('http://localhost:8000/api/quotes')
      .map(
        (response: Response) => {
          return response.json().quotes;
        }
      );
  }

}