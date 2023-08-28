import TimeSlot from "./TimeSlot";

class Availability {
  private slots: TimeSlot[] = [];

  addTimeSlot(timeSlot: TimeSlot) {
    this.slots.push(timeSlot);
  }

  getAvailableSlots(date: Date): TimeSlot[] {
    // Filter slots to only those on the provided date
    const slotsForDate = this.slots.filter((slot) => {
      return (
        slot.date.getDate() === date.getDate() &&
        slot.date.getMonth() === date.getMonth() &&
        slot.date.getFullYear() === date.getFullYear()
      );
    });

    return slotsForDate;
  }
}

export default Availability;
