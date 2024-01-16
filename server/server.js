

import express from "express";

import cors from "cors";
import bodyParser from "body-parser"; 


// connection db
import Connection from "./database/db.js";

import Route from './routes/route.js';


const app = express();
Connection();

app.use(cors()); // for all cors
 
app.use(bodyParser.json({ extended:true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Route);

const PORT = 8000;


app.listen(PORT, () => {
    console.log(`app is running bro at port no ${PORT}`);
})