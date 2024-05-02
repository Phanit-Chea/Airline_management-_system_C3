import { ClassSeat } from "../Enums/ClassSeat";

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


const seatList = new SeatList(200); // Assuming capacity is 200 for demonstration

// Set counts for specific seat types (optional)
seatList.setSeatTypeCount(ClassSeat.FIRSTCLASS, 25); // Setting count for FIRSTCLASS seats to 25
seatList.setSeatTypeCount(ClassSeat.BUSSINESS, 35); // Setting count for BUSSINESS seats to 35
// Similarly, you can set counts for other seat types if needed

// Retrieve seat type counts and capacity
const seatTypeCount = seatList.getSeatTypeCount();
const capacityOfSeats = seatList.getCapacityOfSeats();

// Log the results
console.log("Seat Type Count:", seatTypeCount);
console.log("Capacity of Seats:", capacityOfSeats);


