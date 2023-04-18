export abstract class Vehicle{
    static getSpeed() {
        throw new Error("Method not implemented.");
    }
    private plateID:string;
    private weight :number;
    constructor(plateID:string,weight :number){
        this.plateID = plateID;
        this.weight = weight;
    }
    abstract getSpeed():number;
}