import { ClassSeat } from "../Enums/ClassSeat";

export class Seats {
    private capacityOfSeats: number;
    private seatTypeCount: { [key in ClassSeat]: number } = {
        [ClassSeat.FIRSTCLASS]: 20,
        [ClassSeat.BUSSINESS]: 30,
        [ClassSeat.ECONOMY]: 30,
        [ClassSeat.ACCESSIBLE]: 100,
        [ClassSeat.EMERGENCYEXIT]: 20,
    };

    constructor(capacityOfSeats: number) {
        this.capacityOfSeats = capacityOfSeats;
    }

    setSeatTypeCount(seatType: ClassSeat, count: number): void {
        this.seatTypeCount[seatType] = count;
    }

    getSeatTypeCount(): { [key in ClassSeat]: number } {
        return this.seatTypeCount;
    }

    getCapacityOfSeats(): number {
        return this.capacityOfSeats;
    }
}

// Example usage
let seats = new Seats(150);
console.log(seats.getSeatTypeCount());

