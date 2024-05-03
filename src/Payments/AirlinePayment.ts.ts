import { CrewType } from "../enums/CrewType";

export class AirlinePayment {
  private paymentID: number;
  private employee: CrewType;

  constructor(paymentID: number, employee: CrewType) {
    this.paymentID = paymentID;
    this.employee = employee;
  }

  getPaymentID(): number {
    return this.paymentID;
  }

  private calculateTotalSalary(): number {
    let totalSalary = 0;

    switch (this.employee) {
      case CrewType.PILOT:
        let pilot = 6;
        let pilotSalary = 5000;
        totalSalary = pilot * pilotSalary;
        break;
      case CrewType.CO_PILOT:
        let coPilot = 4;
        let coPilotSalary = 4000;
        totalSalary = coPilot * coPilotSalary;
        break;
      case CrewType.FLIGHTATTENDANT:
        let flightAttendant = 100;
        let flightAttendantSalary = 3000;
        totalSalary = flightAttendant * flightAttendantSalary;
        break;
      case CrewType.CHEF:
        let chef = 10;
        let chefSalary = 3500;
        totalSalary = chef * chefSalary;
        break;
      default:
        break;
    }

    return totalSalary;
  }

  getTotalSalary(): number {
    return this.calculateTotalSalary();
  }
}
const pilotPayment = new AirlinePayment(1, CrewType.PILOT);
const coPilotPayment = new AirlinePayment(2, CrewType.CO_PILOT);
const flightAttendantPayment = new AirlinePayment(3, CrewType.FLIGHTATTENDANT);
const chefPayment = new AirlinePayment(4, CrewType.CHEF);

// check  total salary for each crew type
// console.log("Total salary for pilots: $" + pilotPayment.getTotalSalary());
// console.log("Total salary for co-pilots: $" + coPilotPayment.getTotalSalary());
// console.log("Total salary for flight attendants: $" + flightAttendantPayment.getTotalSalary());
// console.log("Total salary for chefs: $" + chefPayment.getTotalSalary());

// sum total salary all workers
const totalSalary = pilotPayment.getTotalSalary() +
  coPilotPayment.getTotalSalary() +
  flightAttendantPayment.getTotalSalary() +
  chefPayment.getTotalSalary();

// Outputting the total salary
console.log("Total salary for all crew members: $" + totalSalary);
