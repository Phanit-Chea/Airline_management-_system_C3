class Person{
    constructor(private firstName: string, private lastName: string,private email: string,private phone: string, private DateOfBirth: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.DateOfBirth = DateOfBirth;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getEmail(){
        return this.email;
    }
    getPhone(){
        return this.phone;
    }
    getDateOfBirth(){
        return this.DateOfBirth;
    }
}