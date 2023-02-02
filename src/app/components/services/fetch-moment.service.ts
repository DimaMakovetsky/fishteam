import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FetchMomentService {

  private url = 'http://localhost:3000/api/users';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
                          
    
    
  }
  
  // getUsers() : Observable<User[]> 
  // {
  //   return this.http.get('assets/usersP.json').pipe(map((data:any)=>
  //   {
  //       let usersList = data["userList"];
  //       return usersList.map(function(user:any) : User 
  //       {
  //           return new User(user.userName, user.userAge);
  //       });
  //   }),
  //   catchError(err => 
  //   {  
  //       console.log(err); 
  //       this.errorMessage = err.message;
  //       return [];
  //   }))
  // };
}
