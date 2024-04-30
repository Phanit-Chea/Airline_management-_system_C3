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

// let date1 = new DateTime(2005,"APRIL",3);
// let route = new Route(1, "2500Km", "PP", "Sr");
// route.addSchedule(date1);
// let seat = new SeatList(150);
// // Creating an instance of Flight
// let flight1 = new Flight(1, "10:00", "12:00", "120");
// let flight2 = new Flight(1, "10:00", "12:00", "120");

// // Adding seatList and route to flight1
// flight1.addRoute(route);
// flight2.addRoute(route)
// let aircraft = new AirCraft("aircraft","KKK");
// aircraft.addFlight(flight1);
// aircraft.addFlight(flight2);


