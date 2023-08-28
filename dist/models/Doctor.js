"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MedicalStaff_1 = __importDefault(require("./MedicalStaff"));
class Doctor extends MedicalStaff_1.default {
    constructor(firstName, lastName, address, age, staffID, position, department, doctorId) {
        super(firstName, lastName, address, age, staffID, position, department);
        this.availability = [];
        this.doctorId = doctorId;
    }
    info() {
        return `id: ${this.doctorId} name: ${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`;
    }
    addTimeSlot(timeSlot) { }
}
exports.default = Doctor;
