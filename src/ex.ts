abstract class Person {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.age = age;
  }
  abstract info(): string;
}

abstract class MedicalStaff extends Person {
  readonly staffID: number;
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

class Doctor extends MedicalStaff {
  doctorId: number;
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
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: Date;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: Date, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  appointmentInfo() {
    return `date - ${
      (this.date, this.time)
    }, doctor- ${this.doctor.info()}, patient - ${this.patient.info()} `;
  }
}

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
      if ((appointment.date = date)) newArr.push(appointment);
    });
    return newArr;
  }
}
// Create patients
const patient1 = new Patient(
  "John",
  "Doe",
  "123 Main St",
  30,
  1,
  5551234,
  [],
  5552345
);
const patient2 = new Patient(
  "Jane",
  "Doe",
  "456 Park Ave",
  28,
  2,
  5555678,
  [],
  5558765
);

// Create doctors
const doctor1 = new Doctor(
  "Mary",
  "Williams",
  "789 1st St",
  40,
  101,
  "Cardiologist",
  "Cardiology",
  1001
);
const doctor2 = new Doctor(
  "Michael",
  "Davis",
  "321 2nd St",
  45,
  102,
  "Oncologist",
  "Oncology",
  1002
);

// Create hospital
const hospital = new Hospital([], [], [], "Mercy Hospital");

// Add patients and doctors
hospital.addPatient(patient1);
hospital.addPatient(patient2);

hospital.addDoctor(doctor1);
hospital.addDoctor(doctor2);

// Create appointments
const appointment1 = new Appointment(
  patient1,
  doctor1,
  new Date("2023-03-14"),
  "10:00am"
);
const appointment2 = new Appointment(
  patient2,
  doctor2,
  new Date("2023-03-16"),
  "2:00pm"
);

// Add appointments
hospital.addAppointment(appointment1);
hospital.addAppointment(appointment2);

// Get doctor's appointments
const doctor1Appts = hospital.showDoctorAppointments(
  doctor1.doctorId,
  hospital.appointments
);

// Get patient's appointments
const patient1Appts = hospital.showPatientAppointments(
  patient1.patientId,
  hospital.appointments
);

console.log(doctor1Appts); // [appointment1]
console.log(patient1Appts); // [appointment1]
