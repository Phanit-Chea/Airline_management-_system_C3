import { CrewMember } from "../Enums/CrewMember";

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
