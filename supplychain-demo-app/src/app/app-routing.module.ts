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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { GeneratorsComponent } from './Generators/Generators.component';
import { ComputersComponent } from './Computers/Computers.component';
import { AirplaneWingsComponent } from './AirplaneWings/AirplaneWings.component';
import { MaritimeEquiqmentsComponent } from './MaritimeEquiqments/MaritimeEquiqments.component';
import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';

import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { VendorComponent } from './Vendor/Vendor.component';
import { SampleParticipantComponent } from './SampleParticipant/SampleParticipant.component';

import { InitTestDataComponent } from './InitTestData/InitTestData.component';
import { ClearDataComponent } from './ClearData/ClearData.component';
import { ProcessComponent } from './Process/Process.component';
import { SampleTransactionComponent } from './SampleTransaction/SampleTransaction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Generators', component: GeneratorsComponent },
  { path: 'Computers', component: ComputersComponent },
  { path: 'AirplaneWings', component: AirplaneWingsComponent },
  { path: 'MaritimeEquiqments', component: MaritimeEquiqmentsComponent },
  { path: 'SampleAsset', component: SampleAssetComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Distributor', component: DistributorComponent },
  { path: 'Vendor', component: VendorComponent },
  { path: 'SampleParticipant', component: SampleParticipantComponent },
  { path: 'InitTestData', component: InitTestDataComponent },
  { path: 'ClearData', component: ClearDataComponent },
  { path: 'Process', component: ProcessComponent },
  { path: 'SampleTransaction', component: SampleTransactionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
