import { ClassSeat } from "../Enums/ClassSeat";

export class Seat {
    private seatPrice: number;
    private static allSeats: Seat[] = [];
    public isBooked: boolean;
    private capacitySeat: number = 0; // Initialize capacitySeat to 0

    constructor(private seatNumber: string, private classSeat: ClassSeat, isBooked: boolean) {
        this.seatNumber = seatNumber;
        this.classSeat = classSeat;
        this.seatPrice = this.calculateSeatPrice();
        this.isBooked = isBooked;

        // Add the newly created seat to the list of all seats
        Seat.allSeats.push(this);
    }

    getSeatNumber(): string {
        return this.seatNumber;
    }

    getClassSeat(): ClassSeat {
        return this.classSeat;
    }

    getSeatPrice(): number {
        return this.seatPrice;
    }

    private calculateSeatPrice(): number {
        if (this.classSeat === ClassSeat.ACCESSIBLE) {
            return 100;
        } else if (this.classSeat === ClassSeat.BUSSINESS) {
            return 200;
        } else if (this.classSeat === ClassSeat.ECONOMY) {
            return 300;
        } else if (this.classSeat === ClassSeat.EMERGENCYEXIT) {
            return 400;
        } else if (this.classSeat === ClassSeat.FIRSTCLASS) {
            return 500;
        } else {
            throw new Error("Unsupported seat type");
        }
    }
    

    bookSeat(): void {
        this.isBooked = true;
    }

    static getAllSeats(): Seat[] {
        return Seat.allSeats;
    }   

    addCapacity(capacity: number): void { // corrected the method name to addCapacity
        this.capacitySeat += capacity; // Increment the existing capacity
    }
}

// Create a new seat
let seat = new Seat("kkk", ClassSeat.ACCESSIBLE, false);
let seat1 = new Seat("kkk", ClassSeat.ACCESSIBLE, false);

// Now the seat will be added to the list of all seats
seat.addCapacity(1); // Add capacity to the seat
