import express from "express";
import eventRoutes from "./event/event.routes"

const app = express()

app.use(express.json())

app.use(eventRoutes)

app.listen(3000)
console.log('Server on port ', 3000)