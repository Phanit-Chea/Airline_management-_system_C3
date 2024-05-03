import { CrewMember } from "../Person/CrewMember";
import { DateTime } from "../Person/DateTime";

export class Schedule {
    private crewMembers: CrewMember[] = [];

    constructor(private date: DateTime) {}

    getDate(): DateTime {
        return this.date;
    }

    setDate(date: DateTime): void {
        this.date = date;
    }
}
