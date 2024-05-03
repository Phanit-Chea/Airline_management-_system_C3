
import { Meal } from "../FlightReservation/Meal";

export class Chef {
     private meals : Meal[] =[]
     // getName(): string {
     //     throw new Error("Method not implemented.");
     // }
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
