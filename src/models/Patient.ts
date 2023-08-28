import Person from "./Person";
import Appointment from "./Appointment";

class Patient extends Person {
  patientId: number;
  phoneNumber: number;
  emergencyContact?: number;
  medicalHistory?: Appointment[];

  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    patientId: number,
    phoneNumber: number,
    medicalHistory?: Appointment[],
    emergencyContact?: number
  ) {
    super(firstName, lastName, address, age);
    this.patientId = patientId;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }

  info() {
    return `id: ${this.patientId} name: ${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address} medical history ${this.medicalHistory}`;
  }
  updateMedicalHistory(appointment: Appointment) {
    this.medicalHistory?.push(appointment);
  }
}

export default Patient;
