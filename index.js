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

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json(), cors())
app.options('*', cors())

app.get('/', (req, res) => {
    res.json({
      message: "Server is running ...."
    })
  })

app.use('/api/users', userRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/zoom', zoomRouter);
app.use('/api/meeting', meetingRouter);
app.listen(port, () =>{
    connection();
    console.log(`Zoom Meeting SDK Auth Endpoint Sample Node.js listening on port ${port}!`)
}

)