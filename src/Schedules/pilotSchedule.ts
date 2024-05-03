import { CrewMember } from "../Person/CrewMember";
import { AirCraft } from "../AirLines/AirCraft";
import { Schedule } from "./Schedule";
import { Gender } from "../Enums/Gender";
import { CrewType } from "../Enums/CrewType";
import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";
import { Flight } from "../AirLines/Flight";
import { Ticket } from "../enums/Ticket";
import { Route } from "../Routes/Route";

export class PilotSchedule {
    private pilots: CrewMember[] = [];

    constructor(private schedule: Schedule, private flight: Flight, private aircraft: AirCraft) {
    }

    addPilot(pilot: CrewMember): void {
        this.pilots.push(pilot);
    }

    setSchedule(schedule: Schedule): void {
        this.schedule = schedule;
    }

    getSchedule(): Schedule {
        return this.schedule;
    }

    getFlight(): Flight {
        return this.flight;
    }

    getAircraft(): AirCraft {
        return this.aircraft;
    }

    getPilots(): CrewMember[] {
        return this.pilots;
    }
}

// Example usage
const pilot1 = new CrewMember("Jena", "leetiza", "jena@gmail.com", "012-222-333", new DateTime(2002, "April", 9), Gender.MALE, CrewType.PILOT, new Address("123", "PP", "SR"));
const flight1 = new Flight(1, "123", "323", 2, Ticket.RETURN);
const airCraft1 = new AirCraft("KVN", "Booing-202");
const route = new Route(1, "2000 km", "PP", "SR");
const schedule = new Schedule(new Date("2024-05-02"), 2, route);
const pilotSchedule = new PilotSchedule(schedule, flight1, airCraft1);
pilotSchedule.addPilot(pilot1);

// console.log(pilotSchedule);
