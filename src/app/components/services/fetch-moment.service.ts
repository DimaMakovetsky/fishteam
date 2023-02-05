import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FetchMomentService {

  private url = 'http://localhost:3000/api/';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(path:string){
    return this.httpClient.get(this.url+path);
  }
}
