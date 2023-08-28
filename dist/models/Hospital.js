"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hospital {
    constructor(patients, doctors, appointments, hospitalName) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospitalName = hospitalName;
    }
    addPatient(newPatient) {
        this.patients.push(newPatient);
    }
    addDoctor(newDoctor) {
        this.doctors.push(newDoctor);
    }
    addAppointment(newAppointment) {
        this.appointments.push(newAppointment);
    }
    showAppointments() {
        return this.appointments;
    }
    showDoctorAppointments(doctorId, arr) {
        const newArr = [];
        arr.forEach((appointment) => {
            if ((appointment.doctor.doctorId = doctorId))
                newArr.push(appointment);
        });
        return newArr;
    }
    showPatientAppointments(PatientId, arr) {
        const newArr = [];
        arr.forEach((appointment) => {
            if ((appointment.patient.patientId = PatientId))
                newArr.push(appointment);
        });
        return newArr;
    }
    showDaysAppointments(date, arr) {
        const newArr = [];
        arr.forEach((appointment) => {
            if ((appointment.slots.date = date))
                newArr.push(appointment);
        });
        return newArr;
    }
}
exports.default = Hospital;
