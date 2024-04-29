export class Address {
    constructor(private street: string, private city: string, private country: string, private state?: string) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.state = state;
    }
}