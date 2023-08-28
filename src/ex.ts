import Patient from "./models/Patient";
import Doctor from "./models/Doctor";
import Hospital from "./models/Hospital";
import Appointment from "./models/Appointment";
import TimeSlot from "./models/TimeSlot";
import Availability from "./models/Availability";

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
  new TimeSlot(new Date("2023-03-14"), new Date("10:00"), new Date("16:00"))
);
const appointment2 = new Appointment(
  patient2,
  doctor2,
  new TimeSlot(new Date("2023-03-14"), new Date("10:00"), new Date("16:00"))
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

// Add availability for doctors
const slot1 = new TimeSlot(
  new Date("2023-03-14"),
  new Date("09:00"),
  new Date("12:00")
);
const slot2 = new TimeSlot(
  new Date("2023-03-15"),
  new Date("10:00"),
  new Date("16:00")
);

const availability1 = new Availability();
const availability2 = new Availability();

availability1.addTimeSlot(slot1);
availability2.addTimeSlot(slot2);

// Check availability
const dateToCheck = new Date("2023-03-14");

const availableSlotsDoctor1 = availability1.getAvailableSlots(dateToCheck);
console.log(`Available slots for Doctor 1 on ${dateToCheck.toDateString()}: `);
availableSlotsDoctor1.forEach((slot: any) => {
  console.log(
    `From ${slot.startTime.toTimeString()} to ${slot.endTime.toTimeString()}`
  );
});

const availableSlotsDoctor2 = availability2.getAvailableSlots(dateToCheck);
console.log(`Available slots for Doctor 2 on ${dateToCheck.toDateString()}: `);
availableSlotsDoctor2.forEach((slot) => {
  console.log(
    `From ${slot.startTime.toTimeString()} to ${slot.endTime.toTimeString()}`
  );
});
