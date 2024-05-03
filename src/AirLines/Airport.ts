
import { Address } from "../Person/Address";
import { Flight } from "./Flight";

export class Airport{
    constructor(private name:string,private code:string, private address:Address,private flights?:Flight){
        this.name = name;
        this.code = code;
        this.flights=flights;
    }
    getName(){
        return this.name;
    }
    getCode(){
        return this.code;
    }
}

