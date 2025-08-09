const express = require("express");
const tasksRouter = express.Router();
const {createtasks,retrivetasks}= require("../Controller/tasks.controller.js");

tasksRouter.post("/tasks",createtasks);
tasksRouter.get("/tasks",retrivetasks);

module.exports =  tasksRouter;

