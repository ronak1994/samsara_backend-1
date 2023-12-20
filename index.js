import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import qs from 'qs';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import cors from 'cors';
import KJUR from 'jsrsasign';
import jwt from 'jsonwebtoken';
import connection from './Configs/db.js';
import userRouter from './Routes/User.Router.js';
import teacherRouter from './Routes/Teacher.Router.js';
import zoomRouter from './Routes/Zoom.Router.js';
import meetingRouter from './Routes/Meeting.Router.js';
import classRouter from './Routes/Classe.Router.js';
import eventsRouter from './Routes/Events.Router.js';
import assessmentRouter from './Routes/Assessment.Router.js';
import adminRouter from './Routes/Admin.Router.js';
import { User } from './Models/User.Model.js';
import { Teacher } from './Models/Teachers.Model.js';
import { createUser, loginUser, uploadImages } from './Controllers/User.Controller.js';
import { createTeacher, loginTeacher } from './Controllers/Teacher.Controller.js';
import multer from 'multer';
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json(), cors())
app.options('*', cors())

app.get('/', (req, res) => {
    res.json({
      message: "Server is running ...."
    })
  })
  // app.use((err, req, res, next) => {
  //   if (err instanceof multer.MulterError) {
  //     // A Multer error occurred when uploading.
  //     res.status(400).json({
  //       status: 'fail',
  //       message: err.message,
  //     });
  //   } else if (err) {
  //     // An unknown error occurred.
  //     res.status(500).json({
  //       status: 'error',
  //       message: err.message,
  //     });
  //   } else {
  //     next();
  //   }
  // });
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/'); // Set the destination folder for image storage
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename for the stored image
    },
  });
  const upload = multer({ storage: storage });
app.post('/student_login',loginUser)
app.post('/student_signup',upload.array('images', 2),createUser)
app.post('/teacher_login',loginTeacher)
app.post('/teacher_signup',upload.array('images', 2),createTeacher)
app.use('/admin',adminRouter)

// JWT Middleware
 const requireToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'your-secret-key'); // Adjust the secret key

    // Attach user information to the request object
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};


// Add the middleware to secure your routes

// app.use('/api', requireToken);


app.use('/api/users', userRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/zoom', zoomRouter);
app.use('/api/meeting', meetingRouter);
app.use('/api/classes', classRouter);
app.use('/api/events',eventsRouter)
app.use('/api/assessment',assessmentRouter)
app.listen(port, () =>{
    connection();
    console.log(`Zoom Meeting SDK Auth Endpoint Sample Node.js listening on port ${port}!`)
}

)