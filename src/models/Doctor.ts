import MedicalStaff from "./MedicalStaff";
import TimeSlot from "./TimeSlot";
import Availability from "./Availability";

class Doctor extends MedicalStaff {
  doctorId: number;
  availability: Availability[] = [];

  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    staffID: number,
    position: string,
    department: string,
    doctorId: number
  ) {
    super(firstName, lastName, address, age, staffID, position, department);
    this.doctorId = doctorId;
  }

  info() {
    return `id: ${this.doctorId} name: ${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`;
  }

  addTimeSlot(timeSlot: TimeSlot) {}
}

export default Doctor;
