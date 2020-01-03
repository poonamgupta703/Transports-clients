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
  searchValue: string;
  data: any;
  driver:Driver=new Driver();
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

  onSearch(searchValue: string) {
    this.searchValue = searchValue;
    this.driverService.searchDriver(this.searchValue).subscribe(dataList => {  
      this.data =  dataList;
      if( dataList){
       if(this.driver.driverId != null && this.driver.driverId!=undefined && this.driver.dName && this.driver.dName.length > 0){
          dataList =  this.removeNullEntries(dataList); 
          this.getDrivers();
        }
      }   
  });
  }
  removeNullEntries(obj) {   
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object')
        obj[key] = this.removeNullEntries(obj[key]);
      else if (obj[key] === undefined || obj[key] === null)
       obj[key] = '';
      else
        obj[key] = obj[key];
    });    
    return obj;
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


