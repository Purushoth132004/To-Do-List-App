const express = require("express");
const tasksRouter = express.Router();
const {createtasks,retrivetasks,updatetasks,deletetasks}= require("../Controller/tasks.controller.js");


tasksRouter.post("/tasks",createtasks);
tasksRouter.get("/tasks",retrivetasks);
tasksRouter.patch("/tasks",updatetasks);
tasksRouter.delete("/tasks",deletetasks);

module.exports =  tasksRouter;

