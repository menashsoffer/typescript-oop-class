"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = __importDefault(require("./models/Patient"));
const Doctor_1 = __importDefault(require("./models/Doctor"));
const Hospital_1 = __importDefault(require("./models/Hospital"));
const Appointment_1 = __importDefault(require("./models/Appointment"));
const TimeSlot_1 = __importDefault(require("./models/TimeSlot"));
const Availability_1 = __importDefault(require("./models/Availability"));
// Create patients
const patient1 = new Patient_1.default("John", "Doe", "123 Main St", 30, 1, 5551234, [], 5552345);
const patient2 = new Patient_1.default("Jane", "Doe", "456 Park Ave", 28, 2, 5555678, [], 5558765);
// Create doctors
const doctor1 = new Doctor_1.default("Mary", "Williams", "789 1st St", 40, 101, "Cardiologist", "Cardiology", 1001);
const doctor2 = new Doctor_1.default("Michael", "Davis", "321 2nd St", 45, 102, "Oncologist", "Oncology", 1002);
// Create hospital
const hospital = new Hospital_1.default([], [], [], "Mercy Hospital");
// Add patients and doctors
hospital.addPatient(patient1);
hospital.addPatient(patient2);
hospital.addDoctor(doctor1);
hospital.addDoctor(doctor2);
// Create appointments
const appointment1 = new Appointment_1.default(patient1, doctor1, new TimeSlot_1.default(new Date("2023-03-14"), new Date("10:00"), new Date("16:00")));
const appointment2 = new Appointment_1.default(patient2, doctor2, new TimeSlot_1.default(new Date("2023-03-14"), new Date("10:00"), new Date("16:00")));
// Add appointments
hospital.addAppointment(appointment1);
hospital.addAppointment(appointment2);
// Get doctor's appointments
const doctor1Appts = hospital.showDoctorAppointments(doctor1.doctorId, hospital.appointments);
// Get patient's appointments
const patient1Appts = hospital.showPatientAppointments(patient1.patientId, hospital.appointments);
console.log(doctor1Appts); // [appointment1]
console.log(patient1Appts); // [appointment1]
// Add availability for doctors
const slot1 = new TimeSlot_1.default(new Date("2023-03-14"), new Date("09:00"), new Date("12:00"));
const slot2 = new TimeSlot_1.default(new Date("2023-03-15"), new Date("10:00"), new Date("16:00"));
const availability1 = new Availability_1.default();
const availability2 = new Availability_1.default();
availability1.addTimeSlot(slot1);
availability2.addTimeSlot(slot2);
// Check availability
const dateToCheck = new Date("2023-03-14");
const availableSlotsDoctor1 = availability1.getAvailableSlots(dateToCheck);
console.log(`Available slots for Doctor 1 on ${dateToCheck.toDateString()}: `);
availableSlotsDoctor1.forEach((slot) => {
    console.log(`From ${slot.startTime.toTimeString()} to ${slot.endTime.toTimeString()}`);
});
const availableSlotsDoctor2 = availability2.getAvailableSlots(dateToCheck);
console.log(`Available slots for Doctor 2 on ${dateToCheck.toDateString()}: `);
availableSlotsDoctor2.forEach((slot) => {
    console.log(`From ${slot.startTime.toTimeString()} to ${slot.endTime.toTimeString()}`);
});
