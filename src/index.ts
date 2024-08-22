import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import cors from "cors";
import eventRoutes from "./event/event.routes"
import { AppDataSource } from "./db";

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("api/events", eventRoutes)

export default app;

inicio()

async function inicio(){
    await AppDataSource.initialize();
} 
app.listen(3000)
console.log('Server on port ', 3000)