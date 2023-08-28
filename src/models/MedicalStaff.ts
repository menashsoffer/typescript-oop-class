import Person from "./Person";

abstract class MedicalStaff extends Person {
  staffID: number;
  position: string;
  department: string;
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    staffID: number,
    position: string,
    department: string
  ) {
    super(firstName, lastName, address, age);
    this.staffID = staffID;
    this.position = position;
    this.department = department;
  }
  info(): string {
    return ``;
  }
}

export default MedicalStaff;
