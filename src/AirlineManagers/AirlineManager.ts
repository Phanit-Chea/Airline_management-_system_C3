import { AirCraft } from "../AirLines/AirCraft";
import { Airport } from "../AirLines/Airport";
import { Flight } from "../AirLines/Flight";
import { CrewType } from "../Enums/CrewType";
import { Gender } from "../Enums/Gender";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { Address } from "../Person/Address";
import { CrewMember } from "../Person/CrewMember";
import { DateTime } from "../Person/DateTime";
import { Route } from "../Routes/Route";
import { Ticket } from "../enums/Ticket";

export class Manager {
    private airCrafts: AirCraft[] = [];
    private airPorts: Airport[] = [];
    private crewMembers: CrewMember[] = [];

    constructor(private name: string, private gender: Gender, private role: CrewType) {
        this.name = name;
        this.gender = gender;
        this.role = role;
    }

    getName(): string {
        return this.name;
    }

    getGender(): Gender {
        return this.gender;
    }

    getRole(): CrewType {
        return this.role;
    }

    addAirCraft(airCraft: AirCraft): void {
        this.airCrafts.push(airCraft);
    }

    addAirPort(airPort: Airport): void {
        this.airPorts.push(airPort);
    }

    addCrewMember(crewMember: CrewMember): void {
        this.crewMembers.push(crewMember);
    }

    removeAirPort(airport: Airport): void {
        const index = this.airPorts.indexOf(airport);
        if (index !== -1) {
            this.airPorts.splice(index, 1);
        }
    }

    removeCrewMember(crewMember: CrewMember): void {
        const index = this.crewMembers.indexOf(crewMember);
        if (index !== -1) {
            this.crewMembers.splice(index, 1);
        }
    }
}

// Create instances of Flight, AirCraft, Airport, and CrewMember
const flight1 = new Flight(1,"123","323",2,Ticket.RETURN);
const airCraft1 = new AirCraft("KVN", "Booing-202");
const airport1 = new Airport("Airport Name", "Airport Code", new Address("123", "PP", "SR"), flight1);
const crewMember1 = new CrewMember("Jena", "leetiza", "jena@gmail.com", "012-222-333", new DateTime(2002, "April", 9), Gender.MALE, CrewType.PILOT, new Address("123", "PP", "SR"));

// Create a Manager instance
const manager = new Manager("Ratry", Gender.FEMALE, CrewType.MANAGER);
manager.addAirCraft(airCraft1);
manager.addAirPort(airport1);
manager.addCrewMember(crewMember1);

// console.log(manager);
