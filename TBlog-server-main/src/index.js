import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/Users.js"
import {tblogRouter} from './routes/Tblogs.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/tblogs", tblogRouter);


const port = process.env.PORT | 5000;

mongoose.connect("mongodb+srv://akilanvb21:Akilan%4021@tblog.fsmwrg6.mongodb.net/travel_blog").then(() => console.log("DATABASE CONNECTED!!"));
app.listen(port,() => console.log("SERVER RUNNING!!"));


