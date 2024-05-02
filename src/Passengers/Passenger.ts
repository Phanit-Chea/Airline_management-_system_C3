import { Gender } from "../enums/Gender";
import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";
import { Person } from "../Person/Person";
import { Baggage } from "../Baggages/Baggage";
import { Flight } from "../AirLines/Flight";
import { ClassSeat } from "../Enums/ClassSeat";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { Seat } from "../AirLines/Seat";
import { TypeFood } from "../enums/TypeFood";

export class Passenger extends Person {
    private passenger_id: number;
    private bags: Baggage[] = [];
    private bookedFlights: Flight[] = [];
    private bookedSeats: Seat[] = [];
    private bookedMeal: Meal[] = [];



    constructor(passenger_id: number, first_name: string, last_name: string, email: string, phone: string, date_of_birth: DateTime, gender: Gender, address: Address) {
        super(first_name, last_name, email, phone, date_of_birth, gender, address);
        this.passenger_id = passenger_id;
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

        // Find the flight with the given ID
        let flight = flights.find(flight => flight.getFlightID() === flightID);

        if (flight) {
            this.bookedFlights.push(flight);
        } else {
            console.log(`Flight with ID ${flightID} not found.`);
        }

        // You can perform further operations on flightBooking here
    }
    getBookedFlights(): Flight[] {
        return this.bookedFlights;
    }
    bookingSeat(seatNumber: string): void {
        let seats = Seat.getAllSeats();

        // Find the seat with the given seatNumber
        let seat = seats.find(seat => seat.getSeatNumber() === seatNumber);

        if (seat) {
            if (!seat.isBooked) { // Check if the seat is not already booked
                // Update the seat to mark it as booked
                seat.bookSeat();
                // console.log(`Seat ${seatNumber} booked.`);
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
            this.bookedMeal.push(meal)
        } else {
            console.log(`Flight with ID ${mealNumber} not found.`);
        }
    }
    getBookedMeal(): Meal[] {
        return this.bookedMeal;
    }



}
const address = new Address("371", "pp", "pp", "pp");
let bag1 = new Baggage("1", 50);
let bag2 = new Baggage("2", 50);
let date_of_birth = new DateTime(2002, "April", 9);
const passenger1 = new Passenger(
    1,
    "John",
    "Doe",
    "john.doe@example.com",
    "123-456-7890",
    date_of_birth, // Add comma here
    Gender.FEMALE, // Add comma here
    address
);
const passenger2 = new Passenger(
    1,
    "John",
    "Doe",
    "john.doe@example.com",
    "123-456-7890",
    date_of_birth, // Add comma here
    Gender.FEMALE, // Add comma here
    address
);


let chef = new Chef("KK");


let flight1 = new Flight(1, "10:00am", "4:30pm", "2h", chef);
let flight2 = new Flight(2, "10:00am", "4:30pm", "2h", chef);
passenger1.addBag(bag1);
passenger1.addBag(bag2);

let seat = new Seat("kkk", ClassSeat.ACCESSIBLE, false);


let allFlights = Flight.getAllFlights();
let flightId = flight1.getFlightID()
passenger1.bookingFlight(flightId)

passenger2.bookingSeat(seat.getSeatNumber())
let meals = new Meal(1, "kkoo",TypeFood.GLUTENFREE);

meals.addQuantity(2);
chef.addMeal(meals);
passenger2.bookingMeal(meals.getMealNumber())

console.log(meals);




