import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleServiceService } from '../services/vehicle-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  constructor(private vehicleService:VehicleServiceService, private router:Router) { }
  vehicle:Vehicle=new Vehicle();
  btnMsg:String;
  message:String;
  ngOnInit() {
     this.vehicle=this.vehicleService.vehicleGetter();  
    if(this.vehicle.vehicleId!=null && this.vehicle.vehicleId!=undefined){
      this.message="Edit Vehicle Details";
      this.btnMsg="Edit";
    }
    else{
      this.message="Add Vehicle Details";
      this.btnMsg="Save";
    }
  }

  editVehicle(vehicle:Vehicle)
  {
     this.vehicleService.editVehicle(vehicle).subscribe(data=>{
       console.log(data);
       alert("Vehicle Details Successfully Edited.");
       
     this.router.navigate(["/VehicleDetails"]);
     });

  }
  addVehicle(vehicle:Vehicle)
  {
     this.vehicleService.creatVehicle(vehicle).subscribe(data=>{
       console.log(data);
       alert("Vehicle Details Successfully added.");  
     this.router.navigate(["/VehicleDetails"]);
     });
    }
  
}
