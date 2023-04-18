import { Vehicle } from "./Vehicle";

export class MiniVan extends Vehicle{
    constructor(plateID:string,weight :number,private numberLuggage:number,private numberCustomers:number){
        super(plateID,weight)
    }
    getSpeed(){
        let minSpeed = 130;
        
        minSpeed = minSpeed -((this.numberCustomers*10)+(this.numberLuggage*5))
        return minSpeed; 
    }
}