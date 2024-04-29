export class Seat{
    constructor(private seatNumber: string, private classSeat:ClassSeat){
        this.seatNumber = seatNumber;
    }
    getSeatNumber(){
        return this.seatNumber;
    }
}