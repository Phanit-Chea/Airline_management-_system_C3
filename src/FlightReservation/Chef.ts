import { TypeFood } from "../enums/TypeFood";
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
// let meal=new Meal(1,"Doo",TypeFood.GLUTENFREE);


// let Chefs = new Chef("koeuk");
// Chefs.addMeal(meal)
// console.log(Chefs);