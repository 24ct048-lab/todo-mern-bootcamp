const Activity = require("../models/activity")

const createActivity=(req,res)=>{
    Activity.create({
        activity_id:req.body.activity_id,
        todo_description: req.body.todo_description
    })
    .then((data)=>{
        res.status(200).send("New Todo Created.")
    })
    .catch((error)=>{
        res.send(error)
    })
}

module.exports = {createActivity}