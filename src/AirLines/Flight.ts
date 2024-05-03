import { Route } from "../Routes/Route";
import { Seat } from "./seat";
import { Chef } from "../FlightReservation/Chef";
import { Ticket } from "../Enums/Ticket";

export class Flight {
    public seats: Seat[] = [];
    public routes: Route[] = [];
    private static allFlights: Flight[] = [];
    private isReturn: Ticket;
    private chef : Chef[]=[];

    constructor(
        private flightID: number,
        private departureTime: string,
        private arriveTime: string,
        private durationMinutes: number,
     
        isReturn: Ticket // Changed type to Ticket
    ) {
        this.flightID = flightID;
        this.departureTime = departureTime;
        this.arriveTime = arriveTime;
        this.durationMinutes = durationMinutes;

        this.isReturn = isReturn;
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

    getDurationMinutes(): number { // Changed return type to number
        return this.durationMinutes;
    }

    setDepartureTime(departure: string): void {
        this.departureTime = departure;
    }

    setArriveTime(arriveTime: string): void {
        this.arriveTime = arriveTime;
    }

    setDurationMinutes(durationMinutes: number): void { // Changed parameter type to number
        this.durationMinutes = durationMinutes;
    }

    addRoute(route: Route): void {
        this.routes.push(route);
    }

    static getAllFlights(): Flight[] {
        return Flight.allFlights;
    }
    getTicketType(): string {
        return this.isReturn;
    }
    setReturn(isReturn: Ticket): void { // Changed parameter type to Ticket
        this.isReturn = isReturn;
    }


}
let flight1 = new Flight(1,"123","323",2,Ticket.RETURN);
// console.log(flight1);

