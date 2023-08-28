import Patient from "./Patient";
import TimeSlot from "./TimeSlot";
import Doctor from "./Doctor";

class Appointment {
  patient: Patient;
  doctor: Doctor;
  slots: TimeSlot;
  constructor(patient: Patient, doctor: Doctor, slots: TimeSlot) {
    this.patient = patient;
    this.doctor = doctor;
    this.slots = slots;
  }
  appointmentInfo() {
    return `date - ${this.slots}
      }, doctor- ${this.doctor.info()}, patient - ${this.patient.info()} `;
  }
}

export default Appointment;
