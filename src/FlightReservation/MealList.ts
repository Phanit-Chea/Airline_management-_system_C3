import { TypeFood } from "../Enums/TypeFood";

export class MealList {
    private capacityOfMeal: number;
    private mealTypeCount: { [key in TypeFood]: number } = {
        [TypeFood.GLUTENFREE]: 0,
        [TypeFood.VEGAN]: 0,
        [TypeFood.VEGETERAIN]: 0, // Corrected spelling
        [TypeFood.OTHER]: 0,
    };

    constructor(capacity: number) {
        this.capacityOfMeal = capacity;
    }

    setMealTypeCount(mealType: TypeFood, count: number): void {
        this.mealTypeCount[mealType] = count; // Corrected setting count for specific mealType
    }

    getMealTypeCount(): { [key in TypeFood]: number } {
        return this.mealTypeCount;
    }

    getCapacityOfMeal(): number { // Changed method name for clarity
        return this.capacityOfMeal;
    }
}

// const mealList = new MealList(150); // Assuming capacity is 150 for demonstration

// // Set counts for specific meal types (optional)
// mealList.setMealTypeCount(TypeFood.GLUTENFREE, 25); // Setting count for GLUTENFREE meals to 25
// mealList.setMealTypeCount(TypeFood.VEGAN, 35); // Setting count for VEGAN meals to 35
// // Similarly, you can set counts for other meal types if needed

// // Retrieve meal type counts and capacity
// const mealTypeCount = mealList.getMealTypeCount();
// const capacityOfMeal = mealList.getCapacityOfMeal();

// // Log the results
// // console.log("Meal Type Count:", mealTypeCount);
// // console.log("Capacity of Meals:", capacityOfMeal);