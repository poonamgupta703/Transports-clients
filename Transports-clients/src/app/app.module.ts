import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { VehicleServiceService } from './services/vehicle-service.service';
import { DriverServiceService } from './services/driver-service.service';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FuelEntryComponent } from './fuel-entry/fuel-entry.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import 'hammerjs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ConsolidatedViewComponent } from './consolidated-view/consolidated-view.component';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { LogOutComponent } from './log-out/log-out.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    VehicleDetailsComponent,
    AddVehicleComponent,
    AddDriverComponent,
    DriverDetailsComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    FuelEntryComponent,
    ConsolidatedViewComponent,
    UserEntryComponent,
    LogOutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MaterialModule,
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ScrollingModule
  ],
  providers: [VehicleServiceService,DriverServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
