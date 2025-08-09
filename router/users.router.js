const express = require("express");
const userRouter = express.Router();
const {createuserhandler,deleteuserhandler} = require("../Controller/users.controller.js");

userRouter.post("/users",createuserhandler);
userRouter.delete("/users",deleteuserhandler);

module.exports = userRouter;