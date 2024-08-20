import express from "express";
import { z } from "zod";

const app = express()

app.use(express.json())

app.post("/login", (req, res) => {
    res.send("login");
})

app.listen(3000)
console.log('Server on port ', 3000)