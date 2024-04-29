import { Flight } from "./Flight";
import { Seat } from "./seat";

export class airCraft{
    constructor(private name: string,private flights:Flight[] ,private seatCapacity:number,private seats:Seat[]){
        this.name = name;
        this.flights=[];
        this.seatCapacity= seatCapacity;
        this.seats=[];
    }
    getName(){
        return this.name;
    }
    getSeatCapacity(){
        return this.seatCapacity;
    }
    addFlight(flight:Flight):void{
        this.flights.push(flight);
    }
}
