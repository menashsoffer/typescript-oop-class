"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Availability {
    constructor() {
        this.slots = [];
    }
    addTimeSlot(timeSlot) {
        this.slots.push(timeSlot);
    }
    getAvailableSlots(date) {
        // Filter slots to only those on the provided date
        const slotsForDate = this.slots.filter((slot) => {
            return (slot.date.getDate() === date.getDate() &&
                slot.date.getMonth() === date.getMonth() &&
                slot.date.getFullYear() === date.getFullYear());
        });
        return slotsForDate;
    }
}
exports.default = Availability;
