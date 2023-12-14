import mongoose from 'mongoose';

const calendarEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  // Add other fields as needed
});

export const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema);

