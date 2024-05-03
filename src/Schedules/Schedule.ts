import { Route } from "../Routes/Route";

export class Schedule {

    constructor(private date: Date,private legFlight:number,private route:Route) {
        this.date = date;
        this.legFlight=legFlight;
    }

    getDate(): Date {
        return this.date;
    }
    getLegFlight(){
        return this.legFlight;
    }
    setDate(date: Date): void {
        this.date = date;
    }

}

