import { DateTime } from "../Person/DateTime";

export class Route {
    private schedules: DateTime[] = [];

    constructor(
        private routeID: number,
        private distance: string,
        private departureAirport: string,
        private arrivalAirport: string,
    ) { }

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
    addSchedule(schedule: DateTime): void {
        this.schedules.push(schedule);
    }


}



