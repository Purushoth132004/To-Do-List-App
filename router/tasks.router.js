const express = require("express");
const tasksRouter = express.Router();
const {createtasks,retrivetasks,updatetasks,deletetasks}= require("../Controller/tasks.controller.js");

const { validationResult,matchedData } = require("express-validator");
const  validatorarray = require("../Validator/createtask.validator.js")

tasksRouter.get("/tasks",retrivetasks);
tasksRouter.post("/tasks",validatorarray,(req,res)=>{
  let result = validationResult(req);
  if( !result.isEmpty()){
     return res.status(400).json(result);
  }

  const data = matchedData(req);

  createtasks(data);

  return res.status(200).send("Success");


  
});
tasksRouter.patch("/tasks",updatetasks);
tasksRouter.delete("/tasks",deletetasks);

module.exports =  tasksRouter;

