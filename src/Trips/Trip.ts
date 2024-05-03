import { Meal } from "../FlightReservation/Meal";
import { Flight } from "../AirLines/Flight";

export class Trip {
    private tripNumber: number;
    private tripName: string;
    private flights: Flight[];
    private static allTrips: Trip[] = [];

    constructor(tripNumber:number, tripName: string) {
        this.tripNumber = tripNumber;
        this.tripName = tripName;
        Trip.allTrips.push(this);
    }

    getTripName() {
        return this.tripName;
    }
    getTripNumber() {
        return this.tripNumber;
    }
    addFlight(flight: Flight) {
        this.flights.push(flight);
    }
    static getAllTrips(): Trip[] {
        return Trip.allTrips;
    }
    
}


