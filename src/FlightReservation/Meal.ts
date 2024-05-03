import { TypeFood } from "../Enums/TypeFood";

export class Meal {
    private mealNumber: number;
    private foodName: string;
    private static allMeals: Meal[] = [];
    private quantityMeal: number = 0;
    private mealType: TypeFood;
    private mealPrice: number = 0;

    constructor(mealNumber: number, foodName: string, mealType: TypeFood) {
        this.mealNumber = mealNumber;
        this.foodName = foodName;
        this.mealType = mealType;
        Meal.allMeals.push(this);
        this.calculateMealPrice();
    }

    static getAllMeals(): Meal[] {
        return Meal.allMeals;
    }

    getMealNumber(): number {
        return this.mealNumber;
    }

    getFoodName(): string {
        return this.foodName;
    }

    addQuantity(quantity: number): void {
        this.quantityMeal += quantity;
        this.calculateMealPrice();
    }

    getQuantity(): number {
        return this.quantityMeal;
    }

    getPrice(): number {
        return this.mealPrice;
    }

    private calculateMealPrice(): void {
        if (this.quantityMeal === 0 || this.quantityMeal ===1) {
            // If quantity is zero, set price to base price
            if (this.mealType === TypeFood.GLUTENFREE) {
                this.mealPrice = 100;
            } else if (this.mealType === TypeFood.VEGAN) {
                this.mealPrice = 200;
            } else if (this.mealType === TypeFood.VEGETERAIN) {
                this.mealPrice = 300;
            } else if (this.mealType === TypeFood.OTHER) {
                this.mealPrice = 400;
            } else {
                throw new Error("Unsupported meal type");
            }
        } else {
            // If quantity is not zero, calculate price based on base price and quantity
            if (this.mealType === TypeFood.GLUTENFREE) {
                this.mealPrice = 100 * this.quantityMeal;
            } else if (this.mealType === TypeFood.VEGAN) {
                this.mealPrice = 200 * this.quantityMeal;
            } else if (this.mealType === TypeFood.VEGETERAIN) {
                this.mealPrice = 300 * this.quantityMeal;
            } else if (this.mealType === TypeFood.OTHER) {
                this.mealPrice = 400 * this.quantityMeal;
            } else {
                throw new Error("Unsupported meal type");
            }
        }
    }
    
}
