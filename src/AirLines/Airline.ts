import { AirCraft } from "./AirCraft";
import { Airport } from "./Airport";

export class Airline{
    constructor(private name:string,private code:string,private airCraft:AirCraft,private airPorts:Airport){
        this.name =name;
        this.code =code;
    }
    getName(){
        return this.name;
    }
    getCode(){
       return this.code;
    }
}

