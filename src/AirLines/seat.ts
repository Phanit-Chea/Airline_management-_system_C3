import { ClassSeat } from "../Enums/ClassSeat";
import { Passenger } from "../Passengers/Passenger";

export class Seat {
    private seatPrice: number;
    private bookedBy: Passenger | null = null
    private static allSeats: Seat[] = [];
    public isBooked: boolean;
 

    constructor(private seatNumber: string, private classSeat: ClassSeat,isbook: boolean) {
        this.seatNumber = seatNumber;
        this.classSeat = classSeat;
        this.seatPrice = this.calculateSeatPrice();
        this.isBooked = isbook;
       
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
        switch (this.classSeat) {
            case ClassSeat.ACCESSIBLE:
                return 100;
            case ClassSeat.BUSSINESS:
                return 200;
            case ClassSeat.ECONOMY:
                return 300;
            case ClassSeat.EMERGENCYEXIT:
                return 400;
            case ClassSeat.FIRSTCLASS:
                return 500;
            default:
                throw new Error("Unsupported seat type");
        }
    }
    bookSeat(): void {
        this.isBooked = true;
    }

    book(passenger: Passenger): void {
        this.bookedBy = passenger;
    }

    unbook(): void {
        this.bookedBy = null;
    }

    getBookedBy(): Passenger | null {
        return this.bookedBy;
    }
    static getAllSeats(): Seat[] {
        return Seat.allSeats;
    }

    
}
let seat = new Seat("kkk",ClassSeat.ACCESSIBLE,false);
console.log(Seat.getAllSeats());


