import { Manager } from "../AirlineManagers/AirlineManager";
import { AirCraft } from "../AirLines/AirCraft";
import { Airline } from "../AirLines/Airline";
import { Airport } from "../AirLines/Airport";
import { Flight } from "../AirLines/Flight";
import { Seat } from "../AirLines/seat";
import { SeatList } from "../AirLines/SeatList";
import { Baggage } from "../Baggages/Baggage";
import { ClassSeat } from "../enums/ClassSeat";
import { CrewType } from "../enums/CrewType";
import { Gender } from "../enums/Gender";
import { Ticket } from "../enums/Ticket";
import { TypeFood } from "../enums/TypeFood";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { Passenger } from "../Passengers/Passenger";
import { AirlinePayment } from "../Payments/AirlinePayment.ts";
import { Address } from "../Person/Address";
import { CrewMember } from "../Person/CrewMember";
import { DateTime } from "../Person/DateTime";
import { Route } from "../Routes/Route";
import { PilotSchedule } from "../Schedules/pilotSchedule";
import { Schedule } from "../Schedules/Schedule";
import { Trip } from "../Trips/Trip";

// Date of birth 
let dateOfBirth1 = new DateTime(2005,"April",13);
let dateOfBirth2 = new DateTime(2000,"January",10);
let date1 = new DateTime(2024,"May",4);


// Address 
let address1 = new Address("Phnom Penh","Phnom Penh","Cambodia","Cambodia");
let address2 = new Address("2004","Phnom Penh","Cambodia","Cambodia");
let address3 = new Address("271","Phnom Penh","Cambodia","Cambodia");

// Seat 
let AssesbleSeat = new Seat("001",ClassSeat.ACCESSIBLE,false);
let Economy = new Seat("002",ClassSeat.ECONOMY,false);
let EmergencyExit = new Seat("003",ClassSeat.EMERGENCYEXIT,false);
let Bussiness = new Seat("004",ClassSeat.BUSSINESS,false);
let FirstClass = new Seat("005",ClassSeat.FIRSTCLASS,false);


// Trip 
let trip1 = new Trip(1,"Siem Reap");
let trip2 = new Trip(2,"Bangkok");
let trip3 = new Trip(3,"Singapor");

// capacity Seat 
let totalSeat = new SeatList(150);

// Flight 
let flight1 = new Flight(1,"10:00 AM","3:00 PM",2,Ticket.JUSTGO);
let flight2 = new Flight(2,"3:00PM","6:00 PM",2,Ticket.RETURN);
let flight3 = new Flight(3,"7:00AM","5:00PM",9,Ticket.JUSTGO);
let flight4 = new Flight(4,"6:00PM","11:00PM",5,Ticket.JUSTGO);

// Route 
let route1 = new Route(1,"2500km","Phnom Penh","Siem Reap");
let route2 = new Route(1,"2500Km","Siem Reap","Phnom Penh");
// Airline 
let Airline1 = new Airline("Phnom Penh Airline","PP");
let Airline2 = new Airline("Siem Reap Airline","SR")

// Airport
let airport1 = new Airport("Phnom Penh","PP",address1);
let airport2 = new Airport("Siem Reap","SR",address2);

// Aircraft 
let aircraft1 = new AirCraft("PP 01","AK");
let aircraft2 = new AirCraft("Siem Reap S1","SR");

// Bags 
let bag1 = new Baggage("Bk1",30);
let bag2 = new Baggage("Bk2",50);
let bag3 = new Baggage("Bk3",30);

// Chef 
let chef1 = new Chef("Suka");
let chef2 = new Chef("Linna");
let chef3 = new Chef("Kira");

// Meal
let VEGETERAIN = new Meal(1,"Frid",TypeFood.VEGETERAIN);
let VEGAN = new Meal(2,"VEGAN",TypeFood.VEGAN)
let GLUTENFREE = new Meal(3,"GLUTENFREE",TypeFood.GLUTENFREE)
let Other = new Meal(4,"Other",TypeFood.OTHER);


// Pilot 
let pilot1 = new CrewMember("Siem","Chub","siem.chub@gmail.com","0976315667",dateOfBirth1,Gender.MALE,CrewType.PILOT,address1);
let pilot2 = new CrewMember("Reach","Chin","reach.chin@gmail.com","0976315667",dateOfBirth1,Gender.MALE,CrewType.PILOT,address1);

// Co_pilot 
let co_pilot1 = new CrewMember("Rith","Penh","rith.peng@gmail.com","0976315667",dateOfBirth1,Gender.MALE,CrewType.CO_PILOT,address1);
let co_pilot2 = new CrewMember("Thoeun","En","thoeurn.en@gmail.com","0976315667",dateOfBirth1,Gender.MALE,CrewType.CO_PILOT,address1);

// Manager 
let manager1 = new Manager("Rathana",Gender.MALE,CrewType.MANAGER);
manager1.addAirCraft(aircraft1);
manager1.addAirPort(airport1);
manager1.addCrewMember(pilot1);
manager1.addCrewMember(pilot2)
manager1.addCrewMember(co_pilot1);
manager1.addCrewMember(co_pilot2);

// flgihtAttendant
let flightAttendant1 = new CrewMember("Kemleang","Lor","kemleang.lor@gmail.com","0976315667",dateOfBirth1,Gender.MALE,CrewType.FLIGHTATTENDANT,address1);
let flightAttendant2 = new CrewMember("Dany","Nay","dany.nay@gmail.com","0976315667",dateOfBirth2,Gender.FEMALE,CrewType.FLIGHTATTENDANT,address2);
manager1.addCrewMember(flightAttendant1);
manager1.addCrewMember(flightAttendant2);
// console.log(manager1);

// schedule 
let schedule1 = new Schedule(date1);
let pilotSchedule1 = new PilotSchedule(schedule1);
pilotSchedule1.addPilot(pilot1);
pilotSchedule1.addPilot(pilot2);
pilotSchedule1.addAircraft(aircraft1);
pilotSchedule1.addFlight(flight1)
// console.log(pilotSchedule1);


// Passenger 
let passenger1 = new Passenger(1,"Phanit","Chea","phanit.chea@gmail.com","0976315667",dateOfBirth1,Gender.FEMALE,address3);
let passenger2 = new Passenger(2,"Neardey","Loem","neardey.loem@gmail.com","0973035632",dateOfBirth2,Gender.FEMALE,address3);
let passenger3 = new Passenger(3,"Vanny","Vanny","vanny.vanny@gmail.com","09794920334",dateOfBirth2,Gender.FEMALE,address1);


// Airline payment 
let payment1 = new AirlinePayment(1);
payment1.addCrewMember(pilot1);
payment1.addCrewMember(co_pilot1);
payment1.addCrewMember(flightAttendant1)
console.log(payment1.getTotalSalary());

// Passenger add Baggage
passenger1.addBag(bag1);

// aircraft add seats 
aircraft1.addSeats(totalSeat);


// airline add aircraft
Airline1.addAircraft(aircraft1);

// airline add airport 
Airline1.addAircraft(aircraft1);
Airline1.addAirport(airport1);

aircraft1.addFlight(flight1);
airport1.addFlight(flight1);

flight1.addRoute(route1);
flight1.addChef(chef1)
chef1.addMeal(VEGAN);

flight2.addRoute(route2);
flight2.addChef(chef1);
chef1.addMeal(VEGAN);
chef1.addMeal(VEGETERAIN);
chef1.addMeal(Other);
chef1.addMeal(GLUTENFREE);

passenger1.bookingTrip(trip1.getTripNumber());
// console.log(Flight.getAllFlights());
passenger1.bookingFlight(flight1.getFlightID());
// console.log(Seat.getAllSeats());
passenger1.bookingSeat(Bussiness.getSeatNumber());
Bussiness.addCapacity(1);

// console.log(Meal.getAllMeals());
VEGAN.addQuantity(2);
passenger1.bookingMeal(VEGAN.getMealNumber());
// console.log(passenger1);

// console.log(flight1.getDepartureTime());
// console.log(flight1.getArriveTime());
// console.log(route1);
// console.log(route1.getDepartureAirport());
// console.log(route1.getArrivalAirport());



flight1.setDepartureTime("3:00 pm");
flight1.setArriveTime("5:00 pm");
route1.setDepartureAirport("China");
route1.setArrivalAirport("Cambodia");


// console.log(flight1.getDepartureTime());
// console.log(flight1.getArriveTime());
// console.log(route1.getDepartureAirport());
// console.log(route1.getArrivalAirport());
// console.log(pilotSchedule1.getJoinedSchedules(pilot2));









