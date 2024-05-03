import { ClassSeat } from "../enums/ClassSeat";

export class SeatList {
    private capacityOfSeats: number;
    private seatTypeCount: { [key in ClassSeat]: number } = {
        [ClassSeat.FIRSTCLASS]: 20,
        [ClassSeat.BUSSINESS]: 30,
        [ClassSeat.ECONOMY]: 30,
        [ClassSeat.ACCESSIBLE]: 100,
        [ClassSeat.EMERGENCYEXIT]: 20,
    };

    constructor(capacity:number) {
        this.capacityOfSeats = capacity;
        
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


