

import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.o3cdv5r.mongodb.net/whatsapp`
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected succesfully');

    }
    catch (error) {
        console.log('error while connecting with the database ', error.message);
    }

}
export default Connection;