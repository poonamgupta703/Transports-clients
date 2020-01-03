import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DriverServiceService } from '../services/driver-service.service';
import { Driver } from '../models/driver';
import { NgForm } from '@angular/forms';
import { DirectiveRegistryValuesIndex } from '@angular/core/src/render3/interfaces/styling';


@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  router: any;
  @ViewChild('closepopup') closepopup: ElementRef;
  AlreadyExistFlag: boolean;
  successflag: boolean;
  NewDriverFormData: { plant: String; dName: String; dId: String; phNo: Number; licenceNo: Date; licenceExp: Date; createdDate: Date; id: Number; driverId: number; };
 constructor(private driverService:DriverServiceService){}
  driver:Driver=new Driver();
  btnMsg:String;
  message:String;
  
  ngOnInit() {
   
     this.driver=this.driverService.driverGetter();  
    if(this.driver.driverId!=null && this.driver.driverId!=undefined){
      this.message="Edit Driver Details";
      this.btnMsg="Edit Record";
    }
    else{
      this.message="Add Driver Details";
      this.btnMsg="Save Record";
    }
  }

  editVehicle(driver:Driver)
  {
     this.driverService.editDriver(driver).subscribe(data=>{
       console.log(data);
       alert("Driver Details Successfully Edited.");
       
     this.router.navigate(["/DriverDetails"]);
     });

  }
 
  createDriver(driver:Driver)
  {
    driver=this.removeNullEntries(driver);
    this.NewDriverFormData = {
      plant: driver.plant,
      dName: driver.dName,
      dId: driver.dId,
      phNo: driver.phNo,
      licenceNo: driver.licenceExp,
      licenceExp: driver.licenceExp,
      createdDate:driver.createdDate,
      id: driver.id,
      driverId:driver.driverId
    };
    
    this.driverService.creatDriver(driver).subscribe(data=>{   
      alert("Driver added sucessfuly"); 
      this.router.navigate(["/DriverDetails"]);
    });
  }
  clearform(mynform:NgForm){
    mynform.resetForm();
    this.AlreadyExistFlag = false;
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


}