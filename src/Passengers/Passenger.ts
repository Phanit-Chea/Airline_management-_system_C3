import { Gender } from "../enums/Gender";
import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";
import { Person } from "../Person/Person";
import { Baggage } from "../Baggages/Baggage";

class Passenger extends Person {
    private passenger_id: number;
    private bags: Baggage[] = [];

    constructor(passenger_id: number, first_name: string, last_name: string, email: string, phone: string, date_of_birth: DateTime, gender: Gender, address: Address) {
        super(first_name, last_name, email, phone, date_of_birth, gender, address);
        this.passenger_id = passenger_id;
    }

    addBag(bag: Baggage) {
        this.bags.push(bag);
    }

    getTotalBagWeight() {
        let totalWeight = 0;
        this.bags.forEach(bag => {
            totalWeight += bag.getBagWeight();
        });
        return totalWeight;
    }
}


