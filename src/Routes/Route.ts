import { Schedule } from "../Schedules/Schedule";
export class Route {
    private schedules: Schedule[];
    constructor(private routeID: number, private distance: string, private departureAirport: string, private arrivalAirport: string) {
        this.routeID = routeID;
        this.distance = distance;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.schedules = [];
    }

    getRouteID(): number {
        return this.routeID;
    }

    getDistance(): string {
        return this.distance;
    }

    getDepartureAirport(): string {
        return this.departureAirport;
    }

    getArrivalAirport(): string {
        return this.arrivalAirport;
    }

    setDepartureAirport(departureAirport: string): void {
        this.departureAirport = departureAirport;
    }

    setArrivalAirport(arrivalAirport: string): void {
        this.arrivalAirport = arrivalAirport;
    }

    addSchedule(schedule: Schedule): void {
        this.schedules.push(schedule);
    }
}
