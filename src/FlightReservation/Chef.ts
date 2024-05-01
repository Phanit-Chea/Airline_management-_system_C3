import { TypeFood } from "../enums/TypeFood";
import { Meal } from "../FlightReservation/Meal";

export class Chef {
     getName(): string {
         throw new Error("Method not implemented.");
     }
     constructor(public Chef : string, public meal: Meal) {
          this.Chef=Chef;
          this.meal =meal;
     }
     nameChef() {
          return this.Chef;
     }
     getmeal() {
          return this.meal;
     }
}
let meal=new Meal(120,);
meal.setQuantityOfMeal(TypeFood.VEGETERAIN, 15);
meal.setQuantityOfMeal(TypeFood.VEGAN, 20);
meal.setQuantityOfMeal(TypeFood.GLUTENFREE, 5);
meal.setQuantityOfMeal(TypeFood.OTHER, 30);

let Chefs = new Chef("koeuk",meal );
console.log(Chefs);