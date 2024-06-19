// models/Event.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
       
    },
    image: {
        type: String,
     
    },
    startDate: {
        type: Date,
        
    },
    startTime: {
        type: String,
        
    },
    eventType:{
        type: String,
    },
    details: {
        type: String,
       
    },
    password: { type: String},
    meeting_number:{ type: String},
    status: {
        type: Boolean,
        default: true,
      },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;
    