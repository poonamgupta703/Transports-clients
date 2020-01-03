import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FuelDto } from '../models/fuel-dto';
/* const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; */

@Injectable({
  providedIn: 'root'
})
export class FuelServiceService {
  fuel:FuelDto= new FuelDto();

  constructor(private http:HttpClient) {}
  private baseUrl = 'http://localhost:8081/fuelController/';

  public createFuel(fuel:FuelDto) {
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });   
     
    return this.http.post(this.baseUrl+"createFuel",fuel,{headers});
  }
  onChangeVehicleNo(vehileNo:String){
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });    
     
    return this.http.get<FuelDto[]>(this.baseUrl+"getFuelByVehicleNo/"+vehileNo,{headers});
  }
  getFuels(){
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });    
        return this.http.get<FuelDto[]>("http://localhost:8081/fuelController/getFuels",{headers});
  }
  getFuelsByVehicle(vehileNo:String){
    let username='javainuse'
    let password='password'  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });    
        return this.http.get<FuelDto[]>("http://localhost:8081/fuelController/getFuels/"+vehileNo,{headers});
  }
  
}

