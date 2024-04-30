import { CrewMember } from "../Person/CrewMember";
import { Gender } from "../enums/Gender";
import { CrewType } from "../enums/CrewType";
import { Address } from "../Person/Address";
import { DateTime } from "../Person/DateTime";

export class AirlineManager {
  public crewMembers: CrewMember[] = []; 

  constructor(initialCrewMember?: CrewMember) {  
    if (initialCrewMember) {
      this.addCrewMember(initialCrewMember);
    }
  }

  addCrewMember(crewMember: CrewMember): void {
    this.crewMembers.push(crewMember);
  }

  countPilots(): number {
    return this.crewMembers.filter(crewMember => crewMember.role === CrewType.PILOT).length;
  }
}

let date_of_birth = new DateTime(2002, "April", 9);
const address = new Address("371", "pp", "pp", "pfsf");

const Pilot1 = new CrewMember(
  "John",
  "Doe",
  "john@gmail.com",
  "0976715667",
  date_of_birth,
  Gender.MALE,
  CrewType.PILOT,  
  address
);
// 
const Pilot3 = new CrewMember(
  "Jane",
  "Smith",
  "jane@gmail.com",
  "0987654321",
  date_of_birth,
  Gender.FEMALE,
  CrewType.FLIGHTATTENDANT,  
  address
);

let Koeuk = new AirlineManager();
Koeuk.addCrewMember(Pilot1);
Koeuk.addCrewMember(Pilot3);
Koeuk.addCrewMember(Pilot1);

console.log(Koeuk);
const numberOfPilots = Koeuk.countPilots();
console.log("Number of pilots:", numberOfPilots);

