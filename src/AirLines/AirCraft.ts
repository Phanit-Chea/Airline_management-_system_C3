import { DateTime } from "../Person/DateTime";
import { Route } from "../Routes/Route";
import { Flight } from "./Flight";
import { SeatList } from "./SeatList";

export class AirCraft {
    private flights: Flight[];
    public seats: SeatList | undefined;

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
    addSeats(seats: SeatList): void {
        this.seats = seats;
    }
}




