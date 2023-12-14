import express from 'express';
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  loginTeacher
} from '../Controllers/Teacher.Controller.js';


const teacherRouter = express.Router();

// Create a new teacher
teacherRouter.post('/', createTeacher);

// Get all teachers
teacherRouter.get('/', getAllTeachers);

// Get a single teacher by ID
teacherRouter.get('/:id', getTeacherById);

// Update a teacher by ID
teacherRouter.patch('/:id', updateTeacher);

// Delete a teacher by ID
teacherRouter.delete('/:id', deleteTeacher);

// Login
teacherRouter.post('/login', loginTeacher);

export default teacherRouter;
