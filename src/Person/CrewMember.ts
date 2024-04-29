import { Gender } from "../enums/Gender";
import { CrewType } from "../enums/CrewType";
import { Address } from "./Address";
import { Person } from "./Person";
import { DateTime } from "./DateTime";

export class CrewMember extends Person {
    private role: CrewType;

    constructor(
        first_name: string,
        last_name: string,
        email: string,
        phone: string,
        date_of_birth: DateTime,
        gender: Gender,
        role: CrewType,
        address: Address
    ) {
        super(first_name, last_name, email, phone, date_of_birth, gender, address);
        this.role = role;
    }

    
}




