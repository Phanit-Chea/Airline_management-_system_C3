import { Gender } from "../enums/Gender";
import { Address } from "./Address";
import { DateTime } from "./DateTime";
export abstract class Person {
    protected first_name: string;
    protected last_name: string;
    protected email: string;
    protected phone: string;
    protected date_of_birth: DateTime;
    protected gender: Gender;
    protected address: Address;
    constructor(first_name:string, last_name:string, email:string, phone:string,date_of_birth:DateTime, gender:Gender,address:Address) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
    
        this.address = address;
    }
    getFirstName(): string {
        return this.first_name;
    }
    getLastName(): string {
        return this.last_name;
    }
    getEmail(): string {
        return this.email;
    }
    getPhone(): string {
        return this.phone;
    }
    getDateOfBirth(): DateTime {
        return this.date_of_birth;
    }
    getGender(): Gender {
        return this.gender;
    }
    getAddress(): Address {
        return this.address;
    }
    setFirstName(first_name: string): string {
        this.first_name = first_name;
        return this.first_name; 
    }
    setLastName(last_name: string) {
        this.last_name = last_name;
        return this.last_name; 
    }
    
    setEmail(email: string) {
        this.email = email;
        return this.email; 
    }
    setPhone(phone: string) {
        this.phone = phone;
        return this.phone; 
    }
    setDateOfBirth(date_of_birth: DateTime) {
        this.date_of_birth = date_of_birth;
        return this.date_of_birth; 
    }
    setAddress(address: Address){
        this.address = address;
        return this.address; 
    }
    getFullName():string{
        return this.first_name + " " + this.last_name;
    }
}
