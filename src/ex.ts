class Person {
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
}

class Patient extends Person {
  patientId: number;
  phoneNumber: number;
  emergencyContact: number;
  medicalHistory: Appointment[];

  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    patientId: number,
    phoneNumber: number,
    emergencyContact: number,
    medicalHistory: Appointment[]
  ) {
    super(firstName, lastName, address, age);
    this.patientId = patientId;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }

  patientInfo() {
    return `id: ${this.patientId} name: ${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address} medical history ${this.medicalHistory}`;
  }
  updateMedicalHistory(appointment: Appointment) {
    this.medicalHistory.push(appointment);
  }
}

class MedicalStaff extends Person {
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
  doctorInfo() {
    return `id: ${this.doctorId} name: ${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`;
  }
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  appointmentInfo() {
    return `date - ${
      (this.date, this.time)
    }, doctor- ${this.doctor.doctorInfo()}, patient - ${this.patient.patientInfo()} `;
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

  showDaysAppointments(date: string, arr: Appointment[]) {
    const newArr: Appointment[] = [];
    arr.forEach((appointment) => {
      if ((appointment.date = date)) newArr.push(appointment);
    });
    return newArr;
  }
}
