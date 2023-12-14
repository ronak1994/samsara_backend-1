import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  schedule: { type: Date, default: Date.now, required: true },
  recordingPath: String,
  // Add other fields as needed
});

export const Class = mongoose.model('Class', classSchema);

