import { AirCraft } from "../AirLines/AirCraft";
import { Airline } from "../AirLines/Airline";
import { Airport } from "../AirLines/Airport";
import { Flight } from "../AirLines/Flight";
import { Seat } from "../AirLines/seat";
import { Baggage } from "../Baggages/Baggage";
import { ClassSeat } from "../Enums/ClassSeat";
import { CrewType } from "../Enums/CrewType";
import { Gender } from "../Enums/Gender";
import { Ticket } from "../Enums/Ticket";
import { TypeFood } from "../Enums/TypeFood";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { Address } from "../Person/Address";
import { CrewMember } from "../Person/CrewMember";
import { DateTime } from "../Person/DateTime";

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

// Flight 
let flight1 = new Flight(1,"10:00 AM","3:00 PM",2,Ticket.JUSTGO);
let flight2 = new Flight(2,"3:00PM","6:00 PM",2,Ticket.RETURN);
let flight3 = new Flight(3,"7:00AM","5:00PM",9,Ticket.JUSTGO);
let flight4 = new Flight(4,"6:00PM","11:00PM",5,Ticket.JUSTGO);


// Airline 
let Airline1 = new Airline("Phnom Penh Airline","PP");
let Airline2 = new Airline("Siem Reap Airline","SR")

// Airport
let airport1 = new Airport("Phnom Penh","PP",address1,[flight1]);
let airport2 = new Airport("Siem Reap","SR",address2,[flight2]);

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