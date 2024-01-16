

import  express from "express";

import { addUser ,getUsers} from "../controller/user-controller.js";

import { newConversation ,getConversation} from "../controller/conversation-controller.js";
import { newMessage,getMessages } from "../controller/message-controller.js";
import { uploadFile,getImage} from "../controller/image-controller.js";

import upload from '../utils/upload.js';

const route = express.Router();

route.post('/add',addUser)
route.get('/users',getUsers);// to get the data on the ui 
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage) // isme jo new message hai bo frontetn wala  api ka name hai 
route.get('/message/get/:id', getMessages);
// ye call hot hai to is id ke sare message ko aap leakr ke aao okk

route.post('/file/upload',upload.single("file"),uploadFile); // upload is a middle ware okk 

route.get('/file/:filename',getImage);

export default route;