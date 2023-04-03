import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from "mongoose";
import router from "./router/index.js";

const PORT = process.env.PORT;
const bd_url = process.env.BD_URL;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router)


const start_server = async () => {
    try {
        await mongoose.connect(bd_url);
        app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
};

start_server ();


