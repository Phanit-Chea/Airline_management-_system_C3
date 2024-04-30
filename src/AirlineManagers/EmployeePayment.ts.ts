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

  countCrewMembers(): number {
    return this.crewMembers.length;
  }

  countSalaryByRole(): Record<CrewType, number> {
    const totalSalaries: Record<CrewType, number> = {
      [CrewType.PILOT]: 0,
      [CrewType.CO_PILOT]: 0,
      [CrewType.FLIGHTATTENDANT]: 0,
      [CrewType.CHEF]: 0
    };

    // this.crewMembers.forEach(crewMember => {
    //   totalSalaries[crewMember.role] += crewMember.salary;
    // });

    return totalSalaries;
  }

  getTotalSalary(): number {
    return Object.values(this.countSalaryByRole()).reduce((acc, curr) => acc + curr, 0);
  }
}

// Example usage
let date_of_birth = new DateTime(2002, "April", 9);
const address = new Address("371", "pp", "pp", "pfsf");

// Define crew members with specified roles and salaries
const Pilot1 = new CrewMember(
  "John",
  "Doe",
  "john@gmail.com",
  "0976715667",
  date_of_birth,
  Gender.MALE,
  CrewType.PILOT,
  address,
  // 3000 // Salary for a pilot
);

const CoPilot1 = new CrewMember(
  "Mary",
  "Brown",
  "mary@gmail.com",
  "0976715667",
  date_of_birth,
  Gender.FEMALE,
  CrewType.CO_PILOT,
  address,
  // 2000 // Salary for a co-pilot
);

const FlightAttendant1 = new CrewMember(
  "Sarah",
  "Taylor",
  "sarah@gmail.com",
  "0976715667",
  date_of_birth,
  Gender.FEMALE,
  CrewType.FLIGHTATTENDANT,
  address,
  // 1500 // Salary for a flight attendant
);

const Chef1 = new CrewMember(
  "Chef",
  "Smith",
  "chef@gmail.com",
  "0976715667",
  date_of_birth,
  Gender.MALE,
  CrewType.CHEF,
  address,
  // 1000 // Salary for a chef
);

let Koeuk = new AirlineManager();
Koeuk.addCrewMember(Pilot1);
Koeuk.addCrewMember(CoPilot1);
Koeuk.addCrewMember(FlightAttendant1);
Koeuk.addCrewMember(Chef1);

console.log("Number of crew members:", Koeuk.countCrewMembers());
console.log("Salary for each role:", Koeuk.countSalaryByRole());
console.log("Total salary paid to all employees:", Koeuk.getTotalSalary());
