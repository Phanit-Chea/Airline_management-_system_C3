import { ClassSeat } from "../Enums/ClassSeat";

export class Seat {
    private seatPrice: number;

    constructor(private seatNumber: string, private classSeat: ClassSeat) {
        this.seatNumber = seatNumber;
        this.classSeat = classSeat;
        this.seatPrice = this.calculateSeatPrice();
       
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
}
