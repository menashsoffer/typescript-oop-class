class TimeSlot {
  date: Date;
  startTime: Date;
  endTime: Date;

  constructor(date: Date, startTime: Date, endTime: Date) {
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

export default TimeSlot;
