export class Flight{
    constructor(private flightID:number, private departureAirport:string, private arrivalAirport:string, private departure:string, private arriveTime:string,private DurationMenute:number){
        this.flightID = flightID;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.departure = departure;
        this.arriveTime = arriveTime;
        this.DurationMenute = DurationMenute;
    }
    getFlightID(){
        return this.flightID;
    }
    getDepartureAirport(){
        return this.departureAirport;
    }  
    getDepartureTime(){
        return this.departure;
    }
    getArriveTime(){
        return this.arriveTime;
    }
    
    getDurationMenute(){
        return this.DurationMenute;
    }
    // set item 
    setDepartureAirport(departureAirport:string){
        this.departureAirport = departureAirport;
    }
    setArrivalAirport(arrivalAirport:string){
        this.arrivalAirport = arrivalAirport;
    }
    setDepartureTime(departure:string){
        this.departure = departure;
    }
    setArriveTime(arriveTime:string){
        this.arriveTime = arriveTime;
    }
    setDurationMenute(DurationMenute:number){
        this.DurationMenute = DurationMenute;
    }
}