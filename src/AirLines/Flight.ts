import { Route } from "../Routes/Route";
import { Chef } from "../FlightReservation/Chef";
import { Meal } from "../FlightReservation/Meal";
import { TypeFood } from "../enums/TypeFood";

export class Flight{
    Chef:any;
     date: string;
    constructor(private flightID:number,private departureTime:string, private arriveTime:string,private DurationMenute:string,chef: Chef,private route:Route){
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
    addChef (chef:Chef) {
        this.Chef.push(chef);
    }
}
let route = new Route(12,"2000 km","12-02-2023","22-02-2023")
let meal = new Meal (200);
meal.setQuantityOfMeal(TypeFood.GLUTENFREE,20);
meal.setQuantityOfMeal(TypeFood.VEGAN, 20);
meal.setQuantityOfMeal(TypeFood.GLUTENFREE, 50);
meal.setQuantityOfMeal(TypeFood.OTHER, 30);

let Chefs = new Chef("koeuk",meal );

let flight= new Flight(12,"12-02-2023","22-02-2023","10 Days",Chefs,route)

// console.log(flight);


