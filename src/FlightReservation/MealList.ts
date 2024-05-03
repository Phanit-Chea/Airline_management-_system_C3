import { TypeFood } from "../enums/TypeFood";

export class MealList {
    private capacityOfMeal: number;
    private mealTypeCount: { [key in TypeFood]: number } = {
        [TypeFood.GLUTENFREE]: 0,
        [TypeFood.VEGAN]: 0,
        [TypeFood.VEGETERAIN]: 0, 
        [TypeFood.OTHER]: 0,
    };

    constructor(capacity: number) {
        this.capacityOfMeal = capacity;
    }

    setMealTypeCount(mealType: TypeFood, count: number): void {
        this.mealTypeCount[mealType] = count; 
    }

    getMealTypeCount(): { [key in TypeFood]: number } {
        return this.mealTypeCount;
    }

    getCapacityOfMeal(): number { 
        return this.capacityOfMeal;
    }
}

