
import { Flight } from "./Flight";
import { SeatList } from "./SeatList";

export class AirCraft {
    getPilots() {
         throw new Error("Method not implemented.");
    }
    getMaxPilots(): number {
         throw new Error("Method not implemented.");
    }
    private flights: Flight[];
    public seats: SeatList | undefined;

    constructor(private name: string, private model: string, ) {
        this.name = name;
        this.model = model;
    }

    getName(): string {
        return this.name;
    }

    getModel(): string {
        return this.model;
    }

    addFlight(flight: Flight): void {
        if (!this.flights) {
            this.flights = []; // Initialize the flights array if it's not already initialized
        }
        this.flights.push(flight);
    }
    
    addSeats(seats: SeatList): void {
        this.seats = seats;
    }
}




