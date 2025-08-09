const express = require("express");
const app = express();
const port = 3001;
const taskRouter = require("./router/tasks.router.js");
const userRouter = require("./router/users.router.js");

app.use(express.json());

app.use("/",taskRouter);
app.use("/",userRouter);




    

app.listen(port,()=>{
console.log(`App is listening to port : ${port}`);
});


