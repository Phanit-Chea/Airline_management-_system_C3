import { AirCraft } from "./AirCraft";
import { Airport } from "./Airport";
import { Flight } from "./Flight";

export class Airline{
    private airCraft:AirCraft[]=[];
    private airPorts:Airport[]=[];
    constructor(private name:string,private code:string){
        this.name =name;
        this.code =code;
    }
    getName(){
        return this.name;
    }
    getCode(){
       return this.code;
    }
    addAirport(airport:Airport):void{
        this.airPorts.push(airport);
    }
    addAircraft(aircraft:AirCraft):void{
        this.airCraft.push(aircraft)
    }
    
}

