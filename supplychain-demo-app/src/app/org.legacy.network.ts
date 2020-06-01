import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Query} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.legacy.network{
   export enum ProductState {
      OriginState,
      Manufacturer,
      Distribution,
      Field,
      Agency,
   }
   export class Manufacturer extends Participant {
      manufacturerId: string;
      name: string;
   }
   export class Distributor extends Participant {
      distributorId: string;
      name: string;
   }
   export class Vendor extends Participant {
      vendorId: string;
      name: string;
   }
   export class SampleParticipant extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export abstract class Product extends Asset {
      productId: string;
      modelName: string;
      serialNo: string;
      amount: number;
      atState: ProductState;
   }
   export class Generators extends Product {
   }
   export class Computers extends Product {
   }
   export class AirplaneWings extends Product {
   }
   export class MaritimeEquiqments extends Product {
   }
   export class SampleAsset extends Asset {
      assetId: string;
      owner: SampleParticipant;
      value: string;
   }
   export class InitTestData extends Transaction {
   }
   export class ClearData extends Transaction {
   }
   export class Process extends Transaction {
      product: Product;
      fromState: ProductState;
      toState: ProductState;
   }
   export class SampleTransaction extends Transaction {
      asset: SampleAsset;
      newValue: string;
   }
   export class SampleEvent extends Event {
      asset: SampleAsset;
      oldValue: string;
      newValue: string;
   }
   export class GeneratorsByState extends Query {
   }
// }
