import { Vehicle } from "./Vehicle";

export class TucTuc extends Vehicle{
    constructor(plateID:string,weight :number,private numberCustomers:number){
        super(plateID,weight)
    }
    getSpeed(){
        let speed = 130;
        speed = speed - (this.numberCustomers*5)
        return speed;
    }
}