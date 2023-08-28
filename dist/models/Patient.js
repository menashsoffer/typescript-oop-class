"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Patient extends Person_1.default {
    constructor(firstName, lastName, address, age, patientId, phoneNumber, medicalHistory, emergencyContact) {
        super(firstName, lastName, address, age);
        this.patientId = patientId;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    info() {
        return `id: ${this.patientId} name: ${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address} medical history ${this.medicalHistory}`;
    }
    updateMedicalHistory(appointment) {
        var _a;
        (_a = this.medicalHistory) === null || _a === void 0 ? void 0 : _a.push(appointment);
    }
}
exports.default = Patient;
