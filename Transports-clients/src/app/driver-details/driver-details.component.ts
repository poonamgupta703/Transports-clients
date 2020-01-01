import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../models/driver';
import { DriverServiceService } from '../services/driver-service.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  constructor(private driverService:DriverServiceService,private router: Router) { }
  drivers: Driver[];

  ngOnInit() {
    this.getDrivers();
  }
    
  public getDrivers()
  {
    this.driverService.getDriver()
    .subscribe( data => {
      this.drivers = data;
    });
  }

  editDriver(driver: Driver)
  {
    this.driverService.driverSetter(driver);
    this.router.navigate(["/AddDriver"]);
  }
  addDriver(){
    this.router.navigate(["/AddDriver"]);
  }
  deleteDriver(driver:Driver)
  {
    this.driverService.deleteDriver(driver.driverId).subscribe(data=>{
        this.drivers = this.drivers.filter(u => u !== driver);         
    })
  };
  
}


