
import { Route } from "../Routes/Route";
import { Seat } from "./Seat";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { TypeFood } from "../enums/TypeFood";

export class Flight {
    public seats: Seat[] = [];
    public routes: Route[] = [];
    private static allFlights: Flight[] = [];
    constructor(private flightID: number, private departureTime: string, private arriveTime: string, private durationMinutes: string, private chef: Chef, routes: Route[]) {
        this.flightID = flightID;
        this.departureTime = departureTime;
        this.arriveTime = arriveTime;
        this.durationMinutes = durationMinutes;
        this.chef = chef;
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

    addRoute(route: Route): void {
        this.routes.push(route);
    }

    static getAllFlights(): Flight[] {
        return Flight.allFlights;
    }
    
}

let route = new Route(12, "2000 km", "12-02-2023", "22-02-2023");

let meal = new Meal(200);
meal.setQuantityOfMeal(TypeFood.VEGAN, 20);
meal.setQuantityOfMeal(TypeFood.VEGAN, 20);
meal.setQuantityOfMeal(TypeFood.GLUTENFREE, 50);
meal.setQuantityOfMeal(TypeFood.OTHER, 30);

let chef = new Chef("koeuk", meal);

let flight = new Flight(12, "12-02-2023", "22-02-2023", "10 Days", chef, [route]);

console.log(flight);