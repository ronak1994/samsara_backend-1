import express from 'express';

import {
  createSession,
  getAllSessions,
  getSessionById,
  updateSessionById,
  deleteSessionById,
  approveSession,
} from '../Controllers/CustomSession.Controller.js';

const CustomSessionRouter = express.Router();

// Routes
CustomSessionRouter.post('/', createSession);
CustomSessionRouter.get('/', getAllSessions);
CustomSessionRouter.get('/:id', getSessionById);
CustomSessionRouter.put('/:id', updateSessionById);
CustomSessionRouter.delete('/:id', deleteSessionById);
CustomSessionRouter.put('/approve/:sessionId',approveSession);

export default CustomSessionRouter;