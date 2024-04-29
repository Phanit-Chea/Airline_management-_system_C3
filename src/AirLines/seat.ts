export class Seat{
    constructor(private seatNumber: string){
        this.seatNumber = seatNumber;
    }
    getSeatNumber(){
        return this.seatNumber;
    }
}