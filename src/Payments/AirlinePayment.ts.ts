
import { CrewMember } from "../Person/CrewMember";
import { CrewType } from "../enums/CrewType";

export class AirlinePayment {
  private paymentID: number;
  private employees: CrewMember[] = [];

  constructor(paymentID: number) {
    this.paymentID = paymentID;
  }

  addCrewMember(crewMember: CrewMember): void {
    this.employees.push(crewMember);
  }

  getPaymentID(): number {
    return this.paymentID;
  }

  private calculateTotalSalary(): number {
    let totalSalary = 0;

    for (const employee of this.employees) {
      switch (employee.role) {
        case CrewType.PILOT:
          totalSalary += 5000;
          break;
        case CrewType.CO_PILOT:
          totalSalary += 4000;
          break;
        case CrewType.FLIGHTATTENDANT:
          totalSalary += 3000;
          break;
        case CrewType.CHEF:
          totalSalary += 3500;
          break;
        default:
          break;
      }
    }

    return totalSalary;
  }

  getTotalSalary(): number {
    return this.calculateTotalSalary();
  }
}



