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

const getActivity = (req,res)=>{
    Activity.find()
    .then((data)=>{res.json(data)})
    .catch((error)=>{res.send(error)})
}

const deleteActivity = (req,res) =>{
    Activity.findOneAndDelete({
        activity_id: req.params.id
    })
    .then((data)=>{
        res.send("Deleted Successfully")
    })
    .catch((error)=>{
        res.send(error)
    })
}

module.exports = {createActivity, getActivity, deleteActivity}