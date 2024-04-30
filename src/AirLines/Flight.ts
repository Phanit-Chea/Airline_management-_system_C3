import { Passenger } from "../Passengers/Passenger";
import { Route } from "../Routes/Route";
import { Seat } from "./seat";

export class Flight {
    public seats: Seat[] = [];
    public route: Route[] = [];
    private static allFlights: Flight[] = [];

    constructor(
        private flightID: number,
        private departureTime: string,
        private arriveTime: string,
        private durationMinutes: string,
    ) {
        Flight.allFlights.push(this);
    }

    getFlightID(): number {
        return this.flightID;
    }

    getDepartureTime(): string {
        return this.departureTime;
    }

    getArriveTime(): string {
        return this.arriveTime;
    }

    getDurationMinutes(): string {
        return this.durationMinutes;
    }

    setDepartureTime(departure: string): void {
        this.departureTime = departure;
    }

    setArriveTime(arriveTime: string): void {
        this.arriveTime = arriveTime;
    }

    setDurationMinutes(durationMinutes: string): void {
        this.durationMinutes = durationMinutes;
    }

    // addSeat(seat: Seat): void {
    //     this.seats.push(seat);
    // }

    addRoute(route: Route): void {
        this.route.push(route);
    }

    static getAllFlights(): Flight[] {
        return Flight.allFlights;
    }
}

let flight1 = new Flight(12,"10:00am","3:00Pm","2h");

let flight2 = new Flight(13,"10:00am","3:00Pm","2h");
let flight3 = new Flight(14,"10:00am","3:00pm","2h");
// console.log(Flight.getAllFlights());
