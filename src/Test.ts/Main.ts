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
import { Address } from "../Person/Address";
import { CrewMember } from "../Person/CrewMember";
import { DateTime } from "../Person/DateTime";
import { Route } from "../Routes/Route";

// Date of birth 
let dateOfBirth1 = new DateTime(2005,"April",13);
let dateOfBirth2 = new DateTime(2000,"January",10);


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

// capacity Seat 
let totalSeat = new SeatList(150);

// Flight 
let flight1 = new Flight(1,"10:00 AM","3:00 PM",2,Ticket.JUSTGO);
let flight2 = new Flight(2,"3:00PM","6:00 PM",2,Ticket.RETURN);
let flight3 = new Flight(3,"7:00AM","5:00PM",9,Ticket.JUSTGO);
let flight4 = new Flight(4,"6:00PM","11:00PM",5,Ticket.JUSTGO);

// Route 
let route1 = new Route(1,"2500km","Phnom Penh","Siem Reap");
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

// flgihtAttendant
let flightAttendant1 = new CrewMember("Kemleang","Lor","kemleang.lor@gmail.com","0976315667",dateOfBirth1,Gender.MALE,CrewType.FLIGHTATTENDANT,address1);
let flightAttendant2 = new CrewMember("Dany","Nay","dany.nay@gmail.com","0976315667",dateOfBirth2,Gender.FEMALE,CrewType.FLIGHTATTENDANT,address2);

// Passenger 
let passenger1 = new Passenger(1,"Phanit","Chea","phanit.chea@gmail.com","0976315667",dateOfBirth1,Gender.FEMALE,address3);
let passenger2 = new Passenger(2,"Neardey","Loem","neardey.loem@gmail.com","0973035632",dateOfBirth2,Gender.FEMALE,address3);
let passenger3 = new Passenger(3,"Vanny","Vanny","vanny.vanny@gmail.com","09794920334",dateOfBirth2,Gender.FEMALE,address1);

// Passenger add Baggage
passenger1.addBag(bag1);

// aircraft add flight 
aircraft1.addFlight(flight1);
aircraft1.addFlight(flight2);
aircraft1.addFlight(flight3);

// aircraft add seats 
aircraft1.addSeats(totalSeat);


// airline add aircraft
Airline1.addAircraft(aircraft1);

// airline add airport 
Airline1.addAirport(airport1);
airport1.addFlight(flight2);
chef1.addMeal(VEGETERAIN)
flight1.addChef(chef1)
flight1.addRoute(route1)


