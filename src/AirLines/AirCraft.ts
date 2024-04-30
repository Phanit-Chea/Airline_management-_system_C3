import { Flight } from "./Flight";
export class AirCraft {
    private flights: Flight[];

    constructor(private name: string, private model: string) {
        this.name = name;
        this.model = model;
        this.flights = [];
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


