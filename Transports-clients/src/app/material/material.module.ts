import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    //FlexLayoutModule,
    MatTableModule, MatPaginatorModule,
     MatSortModule, MatFormFieldModule,
      MatInputModule
  ],
  exports: [
    CommonModule, MatTableModule, 
    MatPaginatorModule, MatSortModule,
     MatFormFieldModule, MatInputModule,
     //FlexLayoutModule
  ]
})
export class MaterialModule { }
