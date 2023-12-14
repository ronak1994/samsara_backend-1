import express from 'express';
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  loginTeacher
} from '../Controllers/Teacher.Controller.js';
import multer from 'multer';
import { uploadClassRecording } from '../Controllers/Classes.Controller.js';

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Adjust the destination folder as needed
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

teacherRouter.post('/upload-recording', upload.single('recording'), uploadClassRecording);


export default teacherRouter;
