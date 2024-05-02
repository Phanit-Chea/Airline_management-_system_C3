import { CrewMember } from "../Person/CrewMember";

export class Schedule {
    private crewMembers: CrewMember[];

    constructor(private date: Date) {
        this.date = date;
        this.crewMembers = [];
    }

    getDate(): Date {
        return this.date;
    }
    setDate(date: Date): void {
        this.date = date;
    }

    addCrewMember(crewMember: CrewMember): void {
        this.crewMembers.push(crewMember);
    }
}


// import { Flight } from "../AirLines/Flight";
// import { CrewType } from "../enums/CrewType";
// import { Gender } from "../enums/Gender";
// import { Chef } from "../FlightReservation/Chef";
// import { Address } from "../Person/Address";
// import { CrewMember } from "../Person/CrewMember";
// import { DateTime } from "../Person/DateTime";
// import { Route } from "../Routes/Route";
// import { Meal } from "../FlightReservation/Meal";

// export class Schedule {
//     private Pilot: CrewMember[];
//     private flights: Flight[];

//     constructor(private date: Date, Pilot: CrewMember[] = [], flights: Flight[] = []) {
//         this.date = date;
//         this.Pilot = Pilot;
//         this.flights = flights;
//     }

//     getDate(): Date {
//         return this.date;
//     }
//     setDate(date: Date): void {
//         this.date = date;
//     }

//     addCrewMember(crewMember: CrewMember): void {
//         this.Pilot.push(crewMember);
//     }
//     addFlight(flight: Flight): void {
//         this.flights.push(flight);
//     }
// }
// let meal1 = new Meal(1)
// let meal2 = new Meal(2)
// let chef = new Chef("Niit",meal1)
// let chef2 = new Chef("Niit",meal2)
// let route1 =new Route(12, "2000 km", "PP", "SR")
// let route2 =new Route(12, "2000 km", "PP", "SR")
// let pilot1 = new CrewMember("Jena", "leetiza", "jena@gmail.com", "012-222-333", new DateTime(2002, "April", 9), Gender.MALE, CrewType.PILOT, new Address("123", "PP", "Cambodai"));
// let pilot2 = new CrewMember("koeuk", "leetiza", "jena@gmail.com", "012-222-333", new DateTime(2002, "April", 9), Gender.MALE, CrewType.PILOT, new Address("123", "PP", "Cambodai"));
// let flight1 = new Flight(12, "3:30mn", "5:30mn", "2h",chef,route1 );
// let flight2 = new Flight(12, "3:30mn", "5:30mn", "2h",chef,route2 );
// let schedule1 = new Schedule(new Date("2024-05-02"), [pilot1], [flight1]);
// let schedule2 = new Schedule(new Date("2024-05-02"), [pilot2], [flight2]);

// // let arr: Schedule[] = [] ;
// // arr.push(schedule1,schedule2)
// // console.log(arr);
// console.log(schedule2);