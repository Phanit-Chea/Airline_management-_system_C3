import { Airport } from "./Airport";

export class Airline{
    constructor(private name:string,private code:string,private airPorts:Airport[]){
        this.name =name;
        this.code =code;
        this.airPorts=[];
    }
    getName(){
        return this.name;
    }
    getCode(){
       return this.code;
    }
    addAirport(airPort:Airport):void{
        this.airPorts.push(airPort);
    }
}

