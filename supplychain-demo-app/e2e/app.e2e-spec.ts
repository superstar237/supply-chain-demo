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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for supplychain-demo-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be supplychain-demo-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('supplychain-demo-app');
    })
  });

  it('network-name should be supplychain-demo-network@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('supplychain-demo-network@0.0.1.bna');
    });
  });

  it('navbar-brand should be supplychain-demo-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('supplychain-demo-app');
    });
  });

  
    it('Generators component should be loadable',() => {
      page.navigateTo('/Generators');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Generators');
      });
    });

    it('Generators table should have 6 columns',() => {
      page.navigateTo('/Generators');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('Computers component should be loadable',() => {
      page.navigateTo('/Computers');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Computers');
      });
    });

    it('Computers table should have 6 columns',() => {
      page.navigateTo('/Computers');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('AirplaneWings component should be loadable',() => {
      page.navigateTo('/AirplaneWings');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AirplaneWings');
      });
    });

    it('AirplaneWings table should have 6 columns',() => {
      page.navigateTo('/AirplaneWings');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('MaritimeEquiqments component should be loadable',() => {
      page.navigateTo('/MaritimeEquiqments');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('MaritimeEquiqments');
      });
    });

    it('MaritimeEquiqments table should have 6 columns',() => {
      page.navigateTo('/MaritimeEquiqments');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('SampleAsset component should be loadable',() => {
      page.navigateTo('/SampleAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleAsset');
      });
    });

    it('SampleAsset table should have 4 columns',() => {
      page.navigateTo('/SampleAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Manufacturer component should be loadable',() => {
      page.navigateTo('/Manufacturer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Manufacturer');
      });
    });

    it('Manufacturer table should have 3 columns',() => {
      page.navigateTo('/Manufacturer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Distributor component should be loadable',() => {
      page.navigateTo('/Distributor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Distributor');
      });
    });

    it('Distributor table should have 3 columns',() => {
      page.navigateTo('/Distributor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Vendor component should be loadable',() => {
      page.navigateTo('/Vendor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Vendor');
      });
    });

    it('Vendor table should have 3 columns',() => {
      page.navigateTo('/Vendor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('SampleParticipant component should be loadable',() => {
      page.navigateTo('/SampleParticipant');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleParticipant');
      });
    });

    it('SampleParticipant table should have 4 columns',() => {
      page.navigateTo('/SampleParticipant');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('InitTestData component should be loadable',() => {
      page.navigateTo('/InitTestData');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('InitTestData');
      });
    });
  
    it('ClearData component should be loadable',() => {
      page.navigateTo('/ClearData');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ClearData');
      });
    });
  
    it('Process component should be loadable',() => {
      page.navigateTo('/Process');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Process');
      });
    });
  
    it('SampleTransaction component should be loadable',() => {
      page.navigateTo('/SampleTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleTransaction');
      });
    });
  

});