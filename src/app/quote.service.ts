import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Quote } from "./quote.interface";
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

  addQuote(content: string, author: string) {
    const quote: Quote = {
      id: null,
      content: content,
      author: author
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/quote', JSON.stringify(quote), {headers: headers});
  }

  /*addQuote(content: string): Observable<any> {
    const body = JSON.stringify({content: content});
      return this.http.post(API_URL + '/quote', body)
      .map(res => res.json().data);
  }*/

}