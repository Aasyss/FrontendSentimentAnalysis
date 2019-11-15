import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private httpOptions: {};
  private httpOptionsfortweets: {};

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //   })
  //
  // };

  constructor(public http : HttpClient) { }


  searchKeywordsonSubmit(data):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'responseType': 'json',
      }),
      params : new HttpParams().set('text',data)

    };
    // const params = new HttpParams().set('text' , data );
    return this.http.get(environment.backendUrl+"textanalyzer"+"/",this.httpOptions)
  }

  getTweets(data): Observable<any>{
    this.httpOptionsfortweets ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('text',data)
    };
    return this.http.get(environment.backendUrl+"gettweets"+"/",this.httpOptionsfortweets)
  }

}
