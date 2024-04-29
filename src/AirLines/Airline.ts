import { Airport } from "./Airport";


export class Airline {
    
    constructor(private name: string, private code: string,private airPorts: Airport[]) {
        this.name=name;
        this.code=code;
        this.airPorts = [];

    }

    getName(): string {
        return this.name;
    }

    getCode(): string {
        return this.code;
    }

    addAirport(airPort: Airport): void {
        this.airPorts.push(airPort);
    }
    removeAirport(airportCode: string): void {
        this.airPorts = this.airPorts.filter(airport => airport.getCode() !== airportCode);
    }
}


