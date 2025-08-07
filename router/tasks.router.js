const express = require("express");
const tasksRouter = express.Router();

tasksRouter.get("/tasks",(req,res)=>{
  console.log("Get task is working properly");
  res.send("Connected");
});

module.exports =  tasksRouter;

