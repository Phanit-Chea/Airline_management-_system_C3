export class Baggage {
    constructor(private bag_code :string,private weight : number) {
        this.bag_code = bag_code;
        this.weight = weight;
    }
    getBagCode() { 
        return this.bag_code;
    }
    getBagWeight() {
        return this.weight;
    }
}


