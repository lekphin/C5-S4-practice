import { Vehicle } from "./Vehicle";

export class VehicleConvoy {
    vehicle: Vehicle[] = [];


    addVehicle(vehicle:Vehicle){
        this.vehicle.push(vehicle);
    }

  	getMaxSpeed():number{
        
        let maxSpeed = this.vehicle[0].getSpeed();

        for(let vehicle of this.vehicle){
           if(vehicle.getSpeed() > maxSpeed){
                maxSpeed = vehicle.getSpeed();
           }
        }
       return maxSpeed;
    }
}