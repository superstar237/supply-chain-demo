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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MaritimeRadarSystemsBySupplierService } from './MaritimeRadarSystemsBySupplier.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-generators',
  templateUrl: './MaritimeRadarSystemsBySupplier.component.html',
  styleUrls: ['./MaritimeRadarSystemsBySupplier.component.css'],
  providers: [MaritimeRadarSystemsBySupplierService]
})
export class MaritimeRadarSystemsBySupplierComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  productId = new FormControl('', Validators.required);
  modelName = new FormControl('', Validators.required);
  serialNo = new FormControl('', Validators.required);
  amount = new FormControl('', Validators.required);
  atState = new FormControl('', Validators.required);

  constructor(public serviceMaritimeRadarSystemsBySupplier: MaritimeRadarSystemsBySupplierService, fb: FormBuilder) {
    this.myForm = fb.group({
      productId: this.productId,
      modelName: this.modelName,
      serialNo: this.serialNo,
      amount: this.amount,
      atState: this.atState
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceMaritimeRadarSystemsBySupplier.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  getQuery(form: any): Promise<any> {
    const tempList = [];
    this.asset = {
      $class: 'org.legacy.network.MaritimeRadarSystems',
      'productId': this.productId.value,
      'modelName': this.modelName.value,
      'serialNo': this.serialNo.value,
      'amount': this.amount.value,
      'atState': this.atState.value
    };

    // this.myForm.setValue({
    //   'productId': null,
    //   'modelName': null,
    //   'serialNo': null,
    //   'amount': null,
    //   'atState': null
    // });

    return this.serviceMaritimeRadarSystemsBySupplier.getQuery(this.atState.value)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      this.myForm.setValue({
        'productId': null,
        'modelName': null,
        'serialNo': null,
        'amount': null,
        'atState': null
      });
      //this.loadAll();
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }

  addQuery(form: any): Promise<any> {
    this.asset = {
      $class: 'org.legacy.network.MaritimeRadarSystems',
      'productId': this.productId.value,
      'modelName': this.modelName.value,
      'serialNo': this.serialNo.value,
      'amount': this.amount.value,
      'atState': this.atState.value
    };

    this.myForm.setValue({
      'productId': null,
      'modelName': null,
      'serialNo': null,
      'amount': null,
      'atState': null
    });

    return this.serviceMaritimeRadarSystemsBySupplier.addQuery(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'productId': null,
        'modelName': null,
        'serialNo': null,
        'amount': null,
        'atState': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateQuery(form: any): Promise<any> {
    this.asset = {
      $class: 'org.legacy.network.MaritimeRadarSystems',
      'modelName': this.modelName.value,
      'serialNo': this.serialNo.value,
      'amount': this.amount.value,
      'atState': this.atState.value
    };

    return this.serviceMaritimeRadarSystemsBySupplier.updateQuery(form.get('productId').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteQuery(): Promise<any> {

    return this.serviceMaritimeRadarSystemsBySupplier.deleteQuery(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceMaritimeRadarSystemsBySupplier.getQuery(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'productId': null,
        'modelName': null,
        'serialNo': null,
        'amount': null,
        'atState': null
      };
/*
      if (result.productId) {
        formObject.productId = result.productId;
      } else {
        formObject.productId = null;
      }

      if (result.modelName) {
        formObject.modelName = result.modelName;
      } else {
        formObject.modelName = null;
      }

      if (result.serialNo) {
        formObject.serialNo = result.serialNo;
      } else {
        formObject.serialNo = null;
      }

      if (result.amount) {
        formObject.amount = result.amount;
      } else {
        formObject.amount = null;
      }

      if (result.atState) {
        formObject.atState = result.atState;
      } else {
        formObject.atState = null;
      }
*/
      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'productId': null,
      'modelName': null,
      'serialNo': null,
      'amount': null,
      'atState': null
      });
  }

}
