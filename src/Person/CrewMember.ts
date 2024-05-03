import { Gender } from "../Enums/Gender";
import { CrewType } from "../Enums/CrewType";
import { Address } from "./Address";
import { Person } from "./Person";
import { DateTime } from "./DateTime";

export class CrewMember extends Person {
    public role: CrewType;

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

const address = new Address("371", "pp", "pp", "pp");
let date_of_birth = new DateTime(2002, "April", 9);

// Create an instance of CrewMember
const Pilot = new CrewMember(
    "John",                 // first_name
    "Doe",                  // last_name
    "john@gmail.com",       // email
    "0976715667",           // phone
    date_of_birth,          // date_of_birth
    Gender.MALE,            // gender
    CrewType.PILOT,         // role
    address                 // address
);
const Pilot1 = new CrewMember(
    "John",                 // first_name
    "Doe",                  // last_name
    "john@gmail.com",       // email
    "0976715667",           // phone
    date_of_birth,          // date_of_birth
    Gender.MALE,            // gender
    CrewType.PILOT,         // role
    address                 // address
);

console.log(Pilot)


