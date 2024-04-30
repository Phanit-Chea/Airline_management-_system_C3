
import { TypeFood } from "../enums/TypeFood";

export class Meal {
    private quantityFood: number;
    private quantityOfMeal: { [key in TypeFood]: number } = {
        [TypeFood.VEGETERAIN]: 0,
        [TypeFood.VEGAN]: 0,
        [TypeFood.GLUTENFREE]: 0,
        [TypeFood.OTHER]: 0
    };

    constructor(quantityFood: number) {
        this.quantityFood = quantityFood;
    }

    getQuantityFood() {
        return this.quantityFood;
    }

    setQuantityFood(quantity: number) {
        this.quantityFood = quantity;
    }

    getQuantityOfMeal(typeFood: TypeFood) {
        return this.quantityOfMeal[typeFood];
    }

    setQuantityOfMeal(typeFood: TypeFood, quantity: number) {
        this.quantityOfMeal[typeFood] = quantity;
    }
}

const meal = new Meal(120);
meal.setQuantityOfMeal(TypeFood.VEGETERAIN, 15);
meal.setQuantityOfMeal(TypeFood.VEGAN, 20);
meal.setQuantityOfMeal(TypeFood.GLUTENFREE, 35);
meal.setQuantityOfMeal(TypeFood.OTHER, 30);

// console.log(meal);