import { CalendarEvent } from "../Models/Events.Model.js";



export const createEvent = async (req, res) => {
  try {
    const newEvent = await CalendarEvent.create(req.body);
    res.json({ success: true, data: newEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await CalendarEvent.find();
    res.json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getEventById = async (req, res) => {
  const { eventId } = req.params;
  try {
    const foundEvent = await CalendarEvent.findById(eventId);
    res.json({ success: true, data: foundEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const updatedData = req.body;
  try {
    const updatedEvent = await CalendarEvent.findByIdAndUpdate(eventId, updatedData, { new: true });
    res.json({ success: true, data: updatedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const deletedEvent = await CalendarEvent.findByIdAndDelete(eventId);
    res.json({ success: true, data: deletedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
