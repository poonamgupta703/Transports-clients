import { Component, OnInit, ViewChild } from '@angular/core';
import { FuelDto } from '../models/fuel-dto';
import { FuelServiceService } from '../services/fuel-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-entry',
  templateUrl: './fuel-entry.component.html',
  styleUrls: ['./fuel-entry.component.css']
})
export class FuelEntryComponent implements OnInit {
  @ViewChild('myForm') mytemplateForm : NgForm; 
  constructor(private service:FuelServiceService,private router: Router) { }
  fuelDto:FuelDto=new FuelDto();
  dtolist:FuelDto[];

  ngOnInit() {
  }
  onChangeVehicleNo(vehileNo:String){
    this.service.onChangeVehicleNo(vehileNo).subscribe(data=>{
      console.log(data);
      this.dtolist=data;
      this.fuelDto=this.dtolist[0];
    })
  }

  resetForm(){
    this.mytemplateForm.reset();
    this.fuelDto.closingKm=null;
    this.fuelDto.date=null
    this.fuelDto.vehicleNo=null;
    this.fuelDto.driver=null;
    this.fuelDto.make=null;
    this.fuelDto.model=null;
    this.fuelDto.plant=null;
    this.fuelDto.openingKm=null;
    this.fuelDto.efficiency=null;
    this.fuelDto.fuelAmmount=null;
    this.fuelDto.fuelLtr=null;
    this.fuelDto.id=null;
   
  }

 public createFuel(fuelDto)
  {
    this.service.createFuel(fuelDto).subscribe( data=>{
      console.log(data);
      if(data==1){
        alert("Fuel entry has been created successfully");      
        this.router.navigate(["/Consolidated"]);  
      }else{
        alert("Error:-");
      }
    });
  }
  public createAndNext(fuelDto)
  {
    this.service.createFuel(fuelDto).subscribe( data=>{
      console.log(data);
      if(data==1){
        alert("Fuel entry has been created successfully");  
        this.resetForm();      
      }
    });
  }

}
