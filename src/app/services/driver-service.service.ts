import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/* const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}; */
@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {
 /*  searchDriver(searchValue: string) {
    throw new Error("Method not implemented.");
  }
 */
  constructor(private http: HttpClient) { }
  driver: Driver = new Driver();
  private baseUrl = 'http://localhost:8081/VehicleController/';
  //private userUrl = '/api';

  public searchDriver(searchKey:any) {
    if(searchKey == undefined){
        searchKey = ''
    }
  let username = 'admin'
  let password = 'password'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get<Driver[]>(this.baseUrl + "?q=" + searchKey,{headers});
}
 
  public getDriver() {
    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Driver[]>(this.baseUrl + "getDrivers",{headers});
  }
  public deleteDriver(id: any) {
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });    
    return this.http.delete(this.baseUrl + "deleteDriver/" + id,{headers});
  }
  public editDriver(driver: Driver) {
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put(this.baseUrl + "UpdateDriver", driver,{headers});
  }
  public creatDriver(driver: Driver) {
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
    return this.http.post(this.baseUrl + "createDriver", driver,{headers});
  }
  driverSetter(driver) {
    this.driver = driver;
  }
  driverGetter() {
    return this.driver;
  }
}

