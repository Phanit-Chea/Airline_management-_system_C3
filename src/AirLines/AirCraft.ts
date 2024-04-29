import { Flight } from "./Flight";

import { ClassSeat } from "../Enums/ClassSeat";

export class AirCraft {
    private nbOfEachSeat: ClassSeat[];

    constructor(private name: string, private flights: Flight[], private seat: number) {
        this.name = name;
        this.flights = flights; // Assigning provided flights, not an empty array
        this.nbOfEachSeat = this.getNbOfEachSeat();
    }

    getName(): string {
        return this.name;
    }

    

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }

    getNbOfEachSeat(): ClassSeat[] {
        let seatTypes: ClassSeat[] = [];
        for (let seatType of Object.values(ClassSeat)) {
            // seatTypes.push(seatType);
        }
        return seatTypes;
    }
}





