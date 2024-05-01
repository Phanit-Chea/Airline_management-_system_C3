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
let meal=new Meal(120);
meal.setQuantityOfMeal(TypeFood.VEGETERAIN, 15);
meal.setQuantityOfMeal(TypeFood.VEGAN, 20);
meal.setQuantityOfMeal(TypeFood.GLUTENFREE, 5);
meal.setQuantityOfMeal(TypeFood.OTHER, 30);

let Chefs = new Chef("koeuk");
Chefs.addMeal(meal)
console.log(Chefs);