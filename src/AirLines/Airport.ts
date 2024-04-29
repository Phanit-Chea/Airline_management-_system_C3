
import { Flight } from "./Flight";

export class Airport{
    // private address:Address;
    constructor(private name:string,private code:string,private flights:Flight[]){
        this.name = name;
        this.code = code;
        // this.address = address;
        this.flights=[];
    }
    getName(){
        return this.name;
    }
    getCode(){
        return this.code;
    }
    addAirline(flight: Flight): void {
        this.flights.push(flight);
    }

    addFlight(flight:Flight):void{
        this.flights.push(flight);

    }
}