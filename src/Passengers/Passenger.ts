import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";
import { Person } from "../Person/Person";
import { Baggage } from "../Baggages/Baggage";
import { Flight } from "../AirLines/Flight";
import { ClassSeat } from "../enums/ClassSeat";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { Seat } from "../AirLines/seat"; // Corrected import path
import { TypeFood } from "../enums/TypeFood";
import { Trip } from "../Trips/Trip";
import { Gender } from "../enums/Gender";
import { Ticket } from "../enums/Ticket";

export class Passenger extends Person {
    private passenger_id: number;
    private bags: Baggage[] = [];
    private bookedFlights: Flight[] = [];
    private bookedSeats: Seat[] = [];
    private bookedMeal: Meal[] = [];
    private bookedTrip: Trip[] = [];
    private static allPassengerbooking : Passenger[] = [];

    constructor(passenger_id: number, first_name: string, last_name: string, email: string, phone: string, date_of_birth: DateTime, gender: Gender, address: Address) {
        super(first_name, last_name, email, phone, date_of_birth, gender, address);
        this.passenger_id = passenger_id;
        Passenger.allPassengerbooking.push(this);
    }
    getPassengerId(): number {
        return this.passenger_id;
    }
    
    addBag(bag: Baggage) {
        this.bags.push(bag);
    }

    getTotalBagWeight() {
        let totalWeight = 0;
        this.bags.forEach(bag => {
            totalWeight += bag.getBagWeight();
        });
        return totalWeight;
    }

    bookingFlight(flightID: number): void {
        let flights = Flight.getAllFlights();
        let flight = flights.find(flight => flight.getFlightID() === flightID);

        if (flight) {
            this.bookedFlights.push(flight);
        } else {
            console.log(`Flight with ID ${flightID} not found.`);
        }
    }

    getBookedFlights(): Flight[] {
        return this.bookedFlights;
    }

    bookingSeat(seatNumber: string): void {
        let seats = Seat.getAllSeats();
        let seat = seats.find(seat => seat.getSeatNumber() === seatNumber);

        if (seat) {
            if (!seat.isBooked) {
                seat.bookSeat();
                this.bookedSeats.push(seat);
            } else {
                console.log(`Seat ${seatNumber} is already booked.`);
            }
        } else {
            console.log(`Seat ${seatNumber} not found.`);
        }
    }

    getBookedSeat(): Seat[] {
        return this.bookedSeats;
    }

    bookingMeal(mealNumber: number): void {
        let meals = Meal.getAllMeals();
        let meal = meals.find(meal => meal.getMealNumber() == mealNumber);

        if (meal) {
            this.bookedMeal.push(meal);
        } else {
            console.log(`Meal with ID ${mealNumber} not found.`);
        }
    }

    getBookedMeal(): Meal[] {
        return this.bookedMeal;
    }

    bookingTrip(tripNumber: number): void {
        let trips = Trip.getAllTrips();
        let trip = trips.find(trip => trip.getTripNumber() == tripNumber);

        if (trip) {
            this.bookedTrip.push(trip);
        } else {
            console.log(`Trip with ID ${tripNumber} not found.`);
        }
    }
    static getAllPassengers(): Passenger[] {
        return Passenger.allPassengerbooking;
    }
    static getPassengerByID(passengerID: number): Passenger | undefined {
        return Passenger.allPassengerbooking.find(passenger => passenger.passenger_id === passengerID);
    }
}

