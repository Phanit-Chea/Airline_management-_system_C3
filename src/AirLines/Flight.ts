import { Route } from "../Routes/Route";
import { Seat } from "./seat";
import { Chef } from "../FlightReservation/Chef";
import { Ticket } from "../enums/Ticket";

export class Flight {
    // public seats: Seat[] = [];
    public ruotes: Route[] = [];
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

    setDurationMinutes(durationMinutes: number): void { 
        this.durationMinutes = durationMinutes;
    }
    addChef (chef:Chef) {
        this.chef.push(chef);
    }

    static getAllFlights(): Flight[] {
        return Flight.allFlights;
    }
    getTicketType(): string {
        return this.isReturn;
    }
    setReturn(isReturn: Ticket): void { 
        this.isReturn = isReturn;
    }
    addRoute(route:Route):void{
        this.ruotes.push(route)
    }


}


