import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  constructor() { }

  exportAsExcel(table: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'fleet_export');
    XLSX.writeFile(wb, 'fleet_export.xlsx');
  }

}
