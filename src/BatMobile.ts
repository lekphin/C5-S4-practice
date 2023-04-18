import { Vehicle } from "./Vehicle";

export class BatMobile extends Vehicle{
    constructor( plateID:string,weight :number,private isBatmanHere: boolean){
        super(plateID,weight)
    }
    getSpeed():number{
        
        let speedOfbat = 0;
        if(this.isBatmanHere){
            speedOfbat = 500;
        }else{
            speedOfbat = 110;
        }
        return speedOfbat;
    }
}