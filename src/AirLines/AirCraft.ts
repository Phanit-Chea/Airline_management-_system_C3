import { Flight } from "./Flight";
import { Seat } from "./seat";

export class airCraft{
    constructor(private name: string,private numberOFSeat:number, private flights:Flight[] ,private seatCapacity:number,private seats:Seat[]){
        this.name = name;
        this.numberOFSeat=numberOFSeat;
        this.flights=[];
        this.seatCapacity= seatCapacity;
        this.seats=[];
    }
    getName(){
        return this.name;
    }
    getNumberOfSeat(){
        return this.numberOFSeat;
    }
    setNumberOfseat(numberOFSeat:number):number{
        this.numberOFSeat=numberOFSeat;
        return this.numberOFSeat;
    }
    getSeatCapacity(){
        return this.seatCapacity;
    }
    addFlight(flight:Flight):void{
        this.flights.push(flight);
    }
}
