import {MiniVan} from "./MiniVan";
import { BatMobile } from "./BatMobile";
import { TucTuc } from "./TucTuc";
import { VehicleConvoy } from "./VehicleConvoy";


let batMobile = new BatMobile("12A",50,false);
let miniVan = new MiniVan ("10B",30,1,2);
let tuctuc = new TucTuc("2C",100,1);


let vehicleConvoy = new VehicleConvoy();
vehicleConvoy.addVehicle(batMobile);
vehicleConvoy.addVehicle(miniVan);
vehicleConvoy.addVehicle(tuctuc);



// console.log(batMobile .getSpeed());
// console.log(miniVan.getSpeed());
// console.log(tuctuc.getSpeed());
console.log(vehicleConvoy.getMaxSpeed())