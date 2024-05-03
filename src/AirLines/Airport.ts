
import { Address } from "../Person/Address";
import { Flight } from "./Flight";

export class Airport{
    private flights:Flight[]=[]
    constructor(private name:string,private code:string, private address:Address){
        this.name = name;
        this.code = code;
      
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
    addFlight(flight: Flight): void {
        if (!this.flights.includes(flight)) {
            this.flights.push(flight);
        } else {
            console.log("Flight already exists in the airport."); // Optionally, you can handle this case according to your requirements
        }
    }
    
}
