// Import necessary modules and controllers
import express from 'express';
import { createSessionZoomMeeting, createZoomMeeting, deleteMeeting, fetchZoomTokenServerOauth, getAccessToken, getMeeting, zoomuserInfo } from '../Controllers/Zoom.Controller.js';



const zoomRouter = express.Router();

zoomRouter.post('/fetchZoomToken', fetchZoomTokenServerOauth);
zoomRouter.get('/zoom/oauth-token', getAccessToken);
zoomRouter.post('/zoomuserInfo', zoomuserInfo);
zoomRouter.post('/createZoomMeeting', createZoomMeeting);
zoomRouter.post('/createZoomMeeting-session', createSessionZoomMeeting);
zoomRouter.post('/getMeetingData', getMeeting);
zoomRouter.delete('/deleteMeeting', deleteMeeting);

export default zoomRouter;
