import express from "express";
import eventRoutes from "./routes/event.routes"

const app = express()

app.use(express.json())

app.use(eventRoutes)

app.listen(3000)
console.log('Server on port ', 3000)