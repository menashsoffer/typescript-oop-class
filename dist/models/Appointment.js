"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(patient, doctor, slots) {
        this.patient = patient;
        this.doctor = doctor;
        this.slots = slots;
    }
    appointmentInfo() {
        return `date - ${this.slots}
      }, doctor- ${this.doctor.info()}, patient - ${this.patient.info()} `;
    }
}
exports.default = Appointment;
