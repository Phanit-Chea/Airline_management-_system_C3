import { Gender } from "../enums/Gender";
import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";
import { Person } from "../Person/Person";
import { Baggage } from "../Baggages/Baggage";
import { Flight } from "../AirLines/Flight";
import { Seat } from "../AirLines/seat";
import { ClassSeat } from "../Enums/ClassSeat";
import { Route } from "../Routes/Route";

export class Passenger extends Person {
    private passenger_id: number;
    private bags: Baggage[] = [];
    private bookedFlights: Flight[] = [];
    

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
    bookingFlight(flightID: number): void |string {
        let flights = Flight.getAllFlights();
        let flightBooking: Flight[] = [];

        let found = false; // Flag to track if any flight is found with the given ID

        flights.forEach(flight => {
            if (flight.getFlightID() === flightID) {
                flightBooking.push(flight);
                found = true; // Set flag to true if a flight is found
            }
        });
        
        if (this.bookedFlights.length <= 0){
            return "no flight"
        }
    }
    getBookedFlights(): Flight[] {
        return this.bookedFlights;
    }
    bookingSeat(seat:Seat):void {

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

let flight1 = new Flight(1,"10:00am","4:30pm","2h");
let flight2 = new Flight(2,"10:00am","4:30pm","2h");
passenger1.addBag(bag1);
passenger1.addBag(bag2);

// passenger1.bookingFlight(flight1);
// passenger1.bookingFlight(flight2);
let allFlights = Flight.getAllFlights();
let flightId = flight1.getFlightID()
passenger1.bookingFlight(3)
// console.log(passenger1);
console.log(passenger1.getBookedFlights());



