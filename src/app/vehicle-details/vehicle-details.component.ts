import { Component, OnInit, SimpleChanges } from '@angular/core';
import { VehicleServiceService } from '../services/vehicle-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor(private vehicleService:VehicleServiceService,private router: Router) { }
  vehicles: Vehicle[];
  vehicles1: Vehicle[];
  vehicle:Vehicle=new Vehicle();

  ngOnInit() {
    this.getVehical();
  }
  public getVehical()
  {
    this.vehicleService.getVehicles()
      .subscribe( data => {
        this.vehicles = data;
      });
  }
  onSearch(event:any){
    this.vehicles1=null;
    console.log(event);
    for(const index in this.vehicles)
    {
      if(this.vehicles[index].vMake==event||this.vehicles[index].vehicleNo==event || this.vehicles[index].vModel==event||this.vehicles[index].assinplant==event)
      {
        this.vehicles1.push(this.vehicles1[index]);
      }
    }
    this.vehicles=this.vehicles1;
  }
  editVehicle(vehicle:any){
    this.vehicleService.vehicleSetter(vehicle);
    this.router.navigate(["/AddVehicle"]);
  }
  addVehicle()
  {
    this.router.navigate(["/AddVehicle"]);
  }
  deleteVehicle(vehicle:Vehicle)
  {
    this.vehicleService.deleteVehicle(vehicle.vehicleId).subscribe(data=>{
        this.vehicles = this.vehicles.filter(u => u !== vehicle);         
    })
  };  
  
}
