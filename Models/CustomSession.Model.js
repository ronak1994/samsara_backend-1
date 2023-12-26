// Assuming you're using ES6 syntax and have already imported mongoose
import mongoose from 'mongoose';

const customSessionSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teachers',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // You might want to use a specific time format or a Date object depending on your requirements
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: true, // Sessions are unapproved by default
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'done'], // You can customize the possible status values
    default: 'approved',
  },
});

const CustomSession = mongoose.model('CustomSession', customSessionSchema);

export default CustomSession;
