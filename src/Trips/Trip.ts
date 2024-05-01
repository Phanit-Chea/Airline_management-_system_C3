import { Meal } from "../FlightReservation/Meal";
import { Flight } from "../AirLines/Flight";
import { Chef } from "../FlightReservation/Chef";
import { Route } from "../Routes/Route";

export class Trip {
    private tripName: string;
    private flights: Flight[];

    constructor(tripName: string, flights: Flight[]) {
        this.tripName = tripName;
        this.flights = flights;
    }

    getTripName() {
        return this.tripName;
    }

    addFlight(flight: Flight) {
        this.flights.push(flight);
    }
}

// Example usage
const meal = new Meal(12);
const route = new Route(12, "kkk", "7 AM", "9 PM");
const chef = new Chef("koeuk", meal);
const flight = new Flight(12, "12-12-2023", "23-12-2023", "11 Days", chef, route);

const tripName = new Trip("Travel", [flight]);
console.log(tripName); // Output: Travel
