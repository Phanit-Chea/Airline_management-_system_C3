
import { Meal } from "../FlightReservation/Meal";

export class Chef {
     private meals : Meal[] =[]
     constructor(public Chef : string) {
          this.Chef=Chef;

     }
     addMeal(meal:Meal){
          this.meals.push(meal)
     }
     nameChef() {
          return this.Chef;
     }
    
}
