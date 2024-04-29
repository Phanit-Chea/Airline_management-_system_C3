import { Route } from "../Routes/Route";

export class Flight{
    constructor(private flightID:number,private departureTime:string, private arriveTime:string,private DurationMenute:string,private route:Route){
        this.flightID = flightID;
        this.departureTime = departureTime;
        this.arriveTime = arriveTime;
        this.DurationMenute = DurationMenute;
    }
    getFlightID(){
        return this.flightID;
    } 
    getDepartureTime(){
        return this.departureTime;
    }
    getArriveTime(){
        return this.arriveTime;
    }
    
    getDurationMenute(){
        return this.DurationMenute;
    }
    // set item 

    setDepartureTime(departure:string){
        this.departureTime = departure;
    }
    setArriveTime(arriveTime:string){
        this.arriveTime = arriveTime;
    }
    setDurationMenute(DurationMenute:string):void{
        this.DurationMenute = DurationMenute;
    }
}