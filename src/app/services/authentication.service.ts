import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private httpClient:HttpClient) {}
     authenticate(username, password) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.get<User>('http://localhost:8081/VehicleController/validateLogin',{headers}).pipe(
        map(userData => 
        { 
          sessionStorage.setItem('username',username);
          return userData;
         }
       )  
      );
    }
    isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }  
    logOut() {
      sessionStorage.removeItem('username')
    }
}
