import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  constructor(private http: HttpClient) { }
  vehicle: Vehicle = new Vehicle();
  private baseUrl = 'http://localhost:8081/VehicleController/';

  public getVehicles() {
    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Vehicle[]>(this.baseUrl + "getVehicles", { headers });
  }
  public deleteVehicle(id: any) {
    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.delete(this.baseUrl + "deleteVehicle/" + id, { headers });
  }
  public editVehicle(vehicle: Vehicle) {
    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put(this.baseUrl + "UpdateVehicle", vehicle, { headers });
  }
  public creatVehicle(vehicle: Vehicle) {
    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post(this.baseUrl + "createVehicle", vehicle,{ headers });
  }

  vehicleSetter(vehicle) {
    this.vehicle = vehicle;
  }
  vehicleGetter() {
    return this.vehicle;
  }
}
