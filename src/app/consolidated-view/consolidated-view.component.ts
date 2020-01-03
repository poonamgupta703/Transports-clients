import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { ExcelServiceService } from '../services/excel-service.service';
import { FuelDto } from '../models/fuel-dto';
import { FuelServiceService } from '../services/fuel-service.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { containsElement } from '@angular/animations/browser/src/render/shared';


@Component({
  selector: 'app-consolidated-view',
  templateUrl: './consolidated-view.component.html',
  styleUrls: ['./consolidated-view.component.css']
})
export class ConsolidatedViewComponent implements OnInit, AfterViewInit {
  constructor(private excelService: ExcelServiceService, private fuelServiceService: FuelServiceService) { }
  fuels: FuelDto[];
  displayedColumns = ['plant', 'vehicleNo', 'closingKm', 'openingKm', 'fuelAmmount', 'efficiency'];
  dataSource = new MatTableDataSource<FuelDto>();
  vehicleColumns = ['date', 'plant', 'vehicleNo', 'openingKm', 'closingKm', 'fuelLtr', 'fuelAmmount', 'efficiency'];
  vehicleDataSource = new MatTableDataSource<FuelDto>();
  historyFlag: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  ngOnInit() {
    this.getConsolidatedView();
  }
  refresh() {
    this.paginator.firstPage();
    this.historyFlag = false;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  exportAsExcel() {
    this.excelService.exportAsExcel(this.table);
  }
  getConsolidatedView() {
    this.fuelServiceService.getFuels().subscribe(data => {
      this.dataSource.data = data as FuelDto[];
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getFuelEntry(getFuelEntry: String) {
    this.historyFlag = true;
    this.fuelServiceService.getFuelsByVehicle(getFuelEntry).subscribe(data => {
      this.vehicleDataSource.data = data as FuelDto[];
    });
  }

}