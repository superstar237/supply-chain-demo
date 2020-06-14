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

import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../data.service';
import { MaritimeRadarSystemsBySupplierComponent } from './MaritimeRadarSystemsBySupplier.component';
import { MaritimeRadarSystemsBySupplierService } from './MaritimeRadarSystemsBySupplier.service';
import { Observable } from 'rxjs'

describe('MaritimeRadarSystemsBySupplierComponent', () => {
  let component: MaritimeRadarSystemsBySupplierComponent;
  let fixture: ComponentFixture<MaritimeRadarSystemsBySupplierComponent>;

  let mockMaritimeRadarSystemsService;
  let mockDataService

  beforeEach(async(() => {

    mockMaritimeRadarSystemsService = sinon.createStubInstance(MaritimeRadarSystemsBySupplierService);
    mockMaritimeRadarSystemsService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ MaritimeRadarSystemsBySupplierComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: MaritimeRadarSystemsBySupplierService, useValue: mockMaritimeRadarSystemsService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(MaritimeRadarSystemsBySupplierComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the table when a MaritimeRadarSystems is added', fakeAsync(() => {
    let loadAllSpy = sinon.stub(component, 'loadAll');
    sinon.stub(component.serviceMaritimeRadarSystemsBySupplier, 'addQuery').returns(new Observable<any>(observer => {
      observer.next('');
      observer.complete();
    }));

    component.addQuery({});

    tick();
    
    expect(loadAllSpy.callCount).toBe(1);

    loadAllSpy.restore();
  }));

  it('should update the table when a MaritimeRadarSystems is updated', fakeAsync(() => {
    let loadAllSpy = sinon.stub(component, 'loadAll');
    sinon.stub(component.serviceMaritimeRadarSystemsBySupplier, 'updateQuery').returns(new Observable<any>(observer => {
      observer.next('');
      observer.complete();
    }));

    // mock form to be passed to the update function
    let mockForm = new FormGroup({
      productId: new FormControl('id')
    });

    component.updateQuery(mockForm);

    tick();

    expect(loadAllSpy.callCount).toBe(1);

    loadAllSpy.restore();
  }));

  it('should update the table when a MaritimeRadarSystems is deleted', fakeAsync(() => {
    let loadAllSpy = sinon.stub(component, 'loadAll');
    sinon.stub(component.serviceMaritimeRadarSystemsBySupplier, 'deleteQuery').returns(new Observable<any>(observer => {
      observer.next('');
      observer.complete();
    }));

    component.setId('id');
    
    component.deleteQuery();

    tick();

    expect(loadAllSpy.callCount).toBe(1);

    loadAllSpy.restore();
  }));  

});
