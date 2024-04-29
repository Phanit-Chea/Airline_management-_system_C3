import { TypeFood } from "../enums/TypeFood";

export class Food {
    constructor(private foodName: string, private typeFood: TypeFood) {
        this.foodName = foodName;
        this.typeFood = typeFood;
    }
    getFoodName() {
        if (this.typeFood == undefined) {
            return this.typeFood;
        }
    }
}
let food = new Food("koo",TypeFood.VEGAN);
console.log(food);

