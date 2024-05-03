import { Flight } from "../AirLines/Flight";
import { CrewMember } from "../Person/CrewMember";
import { AirCraft } from "../AirLines/AirCraft";
import { Schedule } from "./Schedule";

export class PilotSchedule {
    private pilots: CrewMember[] = [];
    private flight: Flight | null = null;
    private aircraft: AirCraft | null = null;

    constructor(private schedule: Schedule) {}

    addPilot(pilot: CrewMember): void {
        this.pilots.push(pilot);
    }

    setSchedule(schedule: Schedule): void {
        this.schedule = schedule;
    }

    getSchedule(): Schedule {
        return this.schedule;
    }

    addFlight(flight: Flight): void {
        this.flight = flight;
    }

    addAircraft(aircraft: AirCraft): void {
        this.aircraft = aircraft;
    }

    getPilots(): CrewMember[] {
        return this.pilots;
    }

    getFlight(): Flight | null {
        return this.flight;
    }

    getAircraft(): AirCraft | null {
        return this.aircraft;
    }
}
