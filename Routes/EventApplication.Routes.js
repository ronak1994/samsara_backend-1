import express from 'express';
import mongoose from 'mongoose';
import { createEventApplication, deleteEventApplication, getAllEventApplications, getEventApplicationById, updateEventApplication } from '../Controllers/EventsApplication.Controller.js';


const EventApplicationRouter = express.Router();

// Create a new event application
EventApplicationRouter.post('/apply', createEventApplication);

// Get all event applications
EventApplicationRouter.get('/', getAllEventApplications);

// Get a single event application by ID
EventApplicationRouter.get('/:id', getEventApplicationById);

// Update an event application by ID
EventApplicationRouter.put('/:id', updateEventApplication);

// Delete an event application by ID
EventApplicationRouter.delete('/:id', deleteEventApplication);

export default EventApplicationRouter;
