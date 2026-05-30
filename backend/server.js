const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { createActivity } = require("./controllers/activityController")

const app = express()
app.use(express.json()) //middleware 
app.use(cors)

//DNS Fix for Mongodb
const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])

//Paste your mongo_url from website in "" (remove the process.env.MONGODB_CONNECTION_URL)
const mongo_url = process.env.MONGO_CONNECTION_STRING
mongoose.connect(mongo_url)
  .then(() => { console.log("MongoDB instance connected successfully") })
  .catch((err) => console.log("Unable to connect to Mongodb"))


app.post("/create", createActivity)

app.listen(8080, () => {
  console.log("Server is listenting on port 8080")
})

