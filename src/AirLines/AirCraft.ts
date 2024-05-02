import { Flight } from "./Flight";
export class AirCraft {
    getPilots() {
         throw new Error("Method not implemented.");
    }
    getMaxPilots(): number {
         throw new Error("Method not implemented.");
    }
    private flights: Flight[];

    constructor(private name: string, private model: string, ) {
        this.name = name;
        this.model = model;
        // this.flights = [];
    }

    getName(): string {
        return this.name;
    }

    getModel(): string {
        return this.model;
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }

    
}


