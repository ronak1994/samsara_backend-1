import express from 'express';
import { createEvent, deleteEvent, getAllEvents, getEventById, updateEvent } from '../Controllers/Events.Controller.js';

const eventsRouter = express.Router();

// Route for creating a new event
eventsRouter.post('/', createEvent);

// Route for getting all events
eventsRouter.get('/', getAllEvents);

// Route for getting an event by ID
eventsRouter.get('/:eventId', getEventById);

// Route for updating an event
eventsRouter.put('/:eventId',updateEvent);

// Route for deleting an event
eventsRouter.delete('/:eventId', deleteEvent);

export default eventsRouter;
