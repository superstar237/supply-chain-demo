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

'use strict';

const namespace = "org.legacy.network";

const PRODUCT_STATES = ['OriginState', 'Manufacturer', 'Distribution', 'Field', 'Agency'];

/**
 * Init test data
 * @param {org.legacy.network.InitTestData} initTestData - the Init Test Data transaction
 * @transaction
 */
async function InitTestDataFunction(initTestData) {
 	const factory = getFactory();
  const namespace = 'org.legacy.network';

  /* add participants */
  let manufacturers = [
    {
      'manufacturerId': 'MA1',
      'name': 'manufacturer1'
    },
    {
      'manufacturerId': 'MA2',
      'name': 'manufacturer2'
    }
  ];

  let distributors = [
    {
      'distributorId': 'DI1',
      'name': 'distributor1'
    },
    {
      'distributorId': 'DI2',
      'name': 'distributor2'
    }
  ];

  // add the manufacturers
  const manufacturerRegistry = await getParticipantRegistry(namespace + '.Manufacturer');
  manufacturers = manufacturers.map(function (manufacturer) {
    let newManufacturer = factory.newResource(namespace, 'Manufacturer', manufacturer.manufacturerId);
    newManufacturer.name = manufacturer.name;
    return newManufacturer;
  });
  await manufacturerRegistry.addAll(manufacturers);

  // add the distributors
  const distributorRegistry = await getParticipantRegistry(namespace + '.Distributor');
  distributors = distributors.map(function (distributor) {
    let newDistributor = factory.newResource(namespace, 'Distributor', distributor.distributorId);
    newDistributor.name = distributor.name;
    return newDistributor;
  });
  await distributorRegistry.addAll(distributors);

  /* add assets */
  // add the generators
  let generators = [
    {
      'productId': 'GE1',
      'modelName': 'MO-GE-5215',
      'serialNo': 'SN-GE-56163415612',
      'amount': 5,
      'price': 5000
    },
    {
      'productId': 'GE2',
      'modelName': 'MO-GE-1612',
      'serialNo': 'SN-GE-12612361351',
      'amount': 10,
      'price': 4500
    },
    {
      'productId': 'GE3',
      'modelName': 'MO-GE-7819',
      'serialNo': 'SN-GE-72382423723',
      'amount': 1,
      'price': 5500
    },
  ];

  const generatorRegistry = await getAssetRegistry(namespace + '.Generators');
  generators = generators.map(function (generator) {
    let newGenerator = factory.newResource(namespace, 'Generators', generator.productId);
    newGenerator.modelName = generator.modelName;
    newGenerator.serialNo = generator.serialNo;
    newGenerator.amount = generator.amount;
    newGenerator.price = generator.price;
    return newGenerator;
  });
  await generatorRegistry.addAll(generators);
}

/**
 *
 * @param {org.legacy.network.ClearData} ClearData - the Clear Data transaction
 * @transaction
 */
async function ClearDataFunction(ClearData) {
  // deleting participants
  const manufacturerReg = await getParticipantRegistry(namespace + '.Manufacturer');
  let manufacturer = await manufacturerReg.getAll();
  await manufacturerReg.removeAll(manufacturer);
  
  const distributorReg = await getParticipantRegistry(namespace + '.Distributor'); 
  let distributor = await distributorReg.getAll();
  await distributorReg.removeAll(distributor);

  const vendorReg = await getParticipantRegistry(namespace + '.Vendor');
  let vendor = await vendorReg.getAll();
  await vendorReg.removeAll(vendor);

  // deleting assets
  const generatorsReg = await getAssetRegistry(namespace + '.Generators'); 
  let generators = await generatorsReg.getAll();
  await generatorsReg.removeAll(generators);

  const computersReg = await getAssetRegistry(namespace + '.Computers'); 
  let computers = await computersReg.getAll();
  await computersReg.removeAll(computers);
  
  const airplaneWingsReg = await getAssetRegistry(namespace + '.AirplaneWings'); 
  let airplaneWings = await airplaneWingsReg.getAll();
  await airplaneWingsReg.removeAll(airplaneWings);
  
  const maritimeRadarSystemsReg = await getAssetRegistry(namespace + '.MaritimeRadarSystems'); 
  let maritimeRadarSystems = await maritimeRadarSystemsReg.getAll();
  await maritimeRadarSystemsReg.removeAll(maritimeRadarSystems);
  
  const armoredVehiclesReg = await getAssetRegistry(namespace + '.ArmoredVehicles');
  let armoredVehicles = await armoredVehicles.getAll();
  await armoredVehiclesReg.removeAll(armoredVehicles);
}

/**
 *
 * @param {org.legacy.network.Process} param
 * @transaction
 */
async function ProcessFunction(param) {
  let productName = param.productName;
  let productId = param.productId;
  let fromState = param.fromState;
  let toState = param.toState;

  // checking if transfer is valid
  
  if(!PRODUCT_STATES.includes(fromState) || !PRODUCT_STATES.includes(toState)) {
    new Error('Invalid transfer');
  }

  let assetReg;
  assetReg = await getAssetRegistry(namespace + "." + productName);

  let asset = await assetReg.get(productId);
  asset.atState = toState;

  assetReg.update(asset);
}
