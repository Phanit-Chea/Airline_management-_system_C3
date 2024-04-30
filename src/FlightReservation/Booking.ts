import { Flight } from "../AirLines/Flight";
import { Seat } from "../AirLines/seat";
import { Baggage } from "../Baggages/Baggage";
import { ClassSeat } from "../Enums/ClassSeat";
import { Passenger } from "../Passengers/Passenger";
import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";
import { Route } from "../Routes/Route";
import { Gender } from "../enums/Gender";


// address 
const address = new Address("371", "pp", "pp", "pp");
// passenger bag
let bag1 = new Baggage("1", 50);
let bag2 = new Baggage("2", 50);
// date of birth 
let date_of_birth = new DateTime(2002, "April", 9);
// passenger 
const passenger4= new Passenger(
    1,
    "John",
    "Doe",
    "john.doe@example.com",
    "123-456-7890",
    date_of_birth, // Add comma here
    Gender.FEMALE, // Add comma here
    address
);
const passenger3= new Passenger(
    1,
    "John",
    "Doe",
    "john.doe@example.com",
    "123-456-7890",
    date_of_birth, // Add comma here
    Gender.FEMALE, // Add comma here
    address
);
// passenger add bag 
passenger3.addBag(bag1);
passenger3.addBag(bag2)


// schedule date 
let date1 = new DateTime(2005,"APRIL",3);
// route 
let route = new Route(1, "2500Km", "PP", "Sr");

// route add schedule 
route.addSchedule(date1);
// seat 
let seat = new Seat("djfso",ClassSeat.ECONOMY);
// Creating an instance of Flight
let flight1 = new Flight(1, "10:00", "12:00", "120");
let flight2 = new Flight(2, "10:00", "12:00", "120");
let flight3 = new Flight(3, "10:00", "12:00", "120");
let flight4 = new Flight(4, "10:00", "12:00", "120");
let flight5 = new Flight(4, "10:00", "12:00", "120");

// const flights: Flight[] = [flight1, flight2];

// flight add route
flight2.addRoute(route);
// // flight add seat 
// flight1.addSeat(seat);



class Booking {
  
    constructor(private flight: Flight,private seat:Seat) {}

    bookFlight(): void {
        // Add booking logic here
        console.log(`booked Flight ID ${this.flight.getFlightID()}`);
    }
 
    showFlight(): void {
        console.log("Flight Information:");
        console.log(`Flight ID: ${this.flight.getFlightID()}`);
        console.log(`Departure Time: ${this.flight.getDepartureTime()}`);
        console.log(`Arrival Time: ${this.flight.getArriveTime()}`);
        console.log(`Duration: ${this.flight.getDurationMinutes()} minutes`);

    }


 
}




