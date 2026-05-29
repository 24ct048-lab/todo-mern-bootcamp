const express = require("express")
const mongoose = require("mongoose")
const app = express()

//Paste your mongo_url from website in "" (remove the process.env.MONGODB_CONNECTION_URL)
const mongo_url = process.env.MONGODB_CONNECTION_STRING

app.post("/",(req,res)=>{
    res.send("Hello World Aaditya")
})

app.listen(8080, ()=>{
    console.log("Server is listenting on port 8080")
})