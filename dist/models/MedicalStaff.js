"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class MedicalStaff extends Person_1.default {
    constructor(firstName, lastName, address, age, staffID, position, department) {
        super(firstName, lastName, address, age);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }
    info() {
        return ``;
    }
}
exports.default = MedicalStaff;
