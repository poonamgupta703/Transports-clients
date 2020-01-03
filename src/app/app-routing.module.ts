import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AdminComponent } from './admin/admin.component';
import { FuelEntryComponent } from './fuel-entry/fuel-entry.component';
import { ConsolidatedViewComponent } from './consolidated-view/consolidated-view.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LogOutComponent } from './log-out/log-out.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "ResetPassword", component: ResetPasswordComponent,canActivate:[AuthGaurdService]},
  { path: "Consolidated", component: ConsolidatedViewComponent,canActivate:[AuthGaurdService] },
  { path: "AddVehicle", component: AddVehicleComponent ,canActivate:[AuthGaurdService]},
  { path: "FuelEntry", component: FuelEntryComponent ,canActivate:[AuthGaurdService]},
  { path: "VehicleDetails", component: VehicleDetailsComponent,canActivate:[AuthGaurdService] },
  { path: "DriverDetails", component: DriverDetailsComponent ,canActivate:[AuthGaurdService]},
  { path: "AddDriver", component: AddDriverComponent,canActivate:[AuthGaurdService] },
  { path: 'admin', component: AdminComponent ,canActivate:[AuthGaurdService]},
  { path: 'LogOut', component: LogOutComponent ,canActivate:[AuthGaurdService]},
  { path: 'Home', component: HomeComponent ,canActivate:[AuthGaurdService]},
  { path: '**', redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
