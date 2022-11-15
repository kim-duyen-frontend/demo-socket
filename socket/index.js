const express = require("express");
const cors = require("cors");
require("dotenv").config()

const app = express();
app.use(cors({
    origin: process.env.PUBLIC_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

//read data from client
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//api server
app.use("/", (req, res) => {
    return res.send("Turn on server")
})

const PORT = process.env.PORT || 4000;
const listen = app.listen(PORT, () => {
    console.log("Server is running on the port " + listen.address().port);
})