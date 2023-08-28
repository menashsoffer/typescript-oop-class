import Patient from "./Patient";
import Doctor from "./Doctor";
import Appointment from "./Appointment";

class Hospital {
  patients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  hospitalName: string;

  constructor(
    patients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[],
    hospitalName: string
  ) {
    this.patients = patients;
    this.doctors = doctors;
    this.appointments = appointments;
    this.hospitalName = hospitalName;
  }

  addPatient(newPatient: Patient) {
    this.patients.push(newPatient);
  }

  addDoctor(newDoctor: Doctor) {
    this.doctors.push(newDoctor);
  }

  addAppointment(newAppointment: Appointment) {
    this.appointments.push(newAppointment);
  }

  showAppointments() {
    return this.appointments;
  }

  showDoctorAppointments(doctorId: number, arr: Appointment[]) {
    const newArr: Appointment[] = [];
    arr.forEach((appointment) => {
      if ((appointment.doctor.doctorId = doctorId)) newArr.push(appointment);
    });
    return newArr;
  }

  showPatientAppointments(PatientId: number, arr: Appointment[]) {
    const newArr: Appointment[] = [];
    arr.forEach((appointment) => {
      if ((appointment.patient.patientId = PatientId)) newArr.push(appointment);
    });
    return newArr;
  }

  showDaysAppointments(date: Date, arr: Appointment[]) {
    const newArr: Appointment[] = [];
    arr.forEach((appointment) => {
      if ((appointment.slots.date = date)) newArr.push(appointment);
    });
    return newArr;
  }
}

export default Hospital;
