"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Patient extends Person {
    constructor(firstName, lastName, patientId) {
        super(firstName, lastName);
        this.patientId = patientId;
    }
    patientInfo() {
        return `id: ${this.patientId} name: ${this.firstName} ${this.lastName}`;
    }
}
class Doctor extends Person {
    constructor(firstName, lastName, doctorId) {
        super(firstName, lastName);
        this.doctorId = doctorId;
    }
    doctorInfo() {
        return `id: ${this.doctorId} name: ${this.firstName} ${this.lastName}`;
    }
}
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    appointmentInfo() {
        return `date - ${(this.date, this.time)}, doctor- ${this.doctor.doctorInfo()}, patient - ${this.patient.patientInfo()} `;
    }
}
class Hospital {
    constructor(patients, doctors, appointments, hospitalName) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospitalName = hospitalName;
    }
}
