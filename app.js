const express = require("express");
const app = express();
const port = 3001;
const taskRouter = require("./router/tasks.router.js");
const connect = require("./config/connect.js");
app.use(express.json());

app.use("/",taskRouter);




    

app.listen(port,()=>{
console.log(`App is listening to port : ${port}`);
});


