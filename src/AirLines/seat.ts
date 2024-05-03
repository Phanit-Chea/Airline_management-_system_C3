import { ClassSeat } from "../enums/ClassSeat";

export class Seat {
    private seatPrice: number;
    private static allSeats: Seat[] = [];
    public isBooked: boolean;
    private capacitySeat: number = 0;

    constructor(private seatNumber: string, private classSeat: ClassSeat, isBooked: boolean) {
        this.seatNumber = seatNumber;
        this.classSeat = classSeat;
        this.isBooked = isBooked;
        this.seatPrice = this.calculateSeatPrice(); 
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
        let basePrice = 0;
        
        if (this.capacitySeat === 0 || this.capacitySeat ===1) {
            if (this.classSeat === ClassSeat.ACCESSIBLE) {
                basePrice = 100;
            } else if (this.classSeat === ClassSeat.BUSSINESS) {
                basePrice = 200;
            } else if (this.classSeat === ClassSeat.ECONOMY) {
                basePrice = 300;
            } else if (this.classSeat === ClassSeat.FIRSTCLASS || this.classSeat === ClassSeat.EMERGENCYEXIT) {
                basePrice = 400;
            } else {
                throw new Error("Unsupported class seat");
            }
        } else {
            if (this.classSeat === ClassSeat.ACCESSIBLE) {
                basePrice = 100;
            } else if (this.classSeat === ClassSeat.BUSSINESS) {
                basePrice = 200;
            } else if (this.classSeat === ClassSeat.ECONOMY) {
                basePrice = 300;
            } else if (this.classSeat === ClassSeat.FIRSTCLASS || this.classSeat === ClassSeat.EMERGENCYEXIT) {
                basePrice = 400;
            }
            basePrice *= this.capacitySeat;
        }

        return basePrice;
    }

    bookSeat(): void {
        this.isBooked = true;
    }

    static getAllSeats(): Seat[] {
        return Seat.allSeats;
    }

    addCapacity(capacity: number): void {
        this.capacitySeat += capacity;
        this.seatPrice = this.calculateSeatPrice();
    }
}
