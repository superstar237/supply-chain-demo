/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { GeneratorsComponent } from './Generators/Generators.component';
import { ComputersComponent } from './Computers/Computers.component';
import { AirplaneWingsComponent } from './AirplaneWings/AirplaneWings.component';
import { MaritimeRadarSystemsComponent } from './MaritimeRadarSystems/MaritimeRadarSystems.component';
import { ArmoredVehiclesComponent } from './ArmoredVehicles/ArmoredVehicles.component';

import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { VendorComponent } from './Vendor/Vendor.component';

import { InitTestDataComponent } from './InitTestData/InitTestData.component';
import { ClearDataComponent } from './ClearData/ClearData.component';
import { ProcessComponent } from './Process/Process.component';

import { GeneratorsBySupplierComponent } from './GeneratorsBySupplier/GeneratorsBySupplier.component';
import { ComputersBySupplierComponent } from './ComputersBySupplier/ComputersBySupplier.component';
import { AirplaneWingsBySupplierComponent } from './AirplaneWingsBySupplier/AirplaneWingsBySupplier.component';
import { MaritimeRadarSystemsBySupplierComponent } from './MaritimeRadarSystemsBySupplier/MaritimeRadarSystemsBySupplier.component';
import { ArmoredVehiclesBySupplierComponent } from './ArmoredVehiclesBySupplier/ArmoredVehiclesBySupplier.component';
import { SelectProcessComponent } from './SelectProcess/SelectProcess.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratorsComponent,
    ComputersComponent,
    AirplaneWingsComponent,
    MaritimeRadarSystemsComponent,
    ArmoredVehiclesComponent,
    ManufacturerComponent,
    DistributorComponent,
    VendorComponent,
    InitTestDataComponent,
    ClearDataComponent,
    ProcessComponent,
    GeneratorsBySupplierComponent,
    ComputersBySupplierComponent,
    AirplaneWingsBySupplierComponent,
    MaritimeRadarSystemsBySupplierComponent,
    ArmoredVehiclesBySupplierComponent,
    SelectProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
