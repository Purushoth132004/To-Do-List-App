const express = require("express");
const app = express();
const port = 3001;
const taskRouter = require("./router/tasks.router.js");
const mongoose = require("mongoose");

app.use("/",taskRouter);


async function bootstrap(){
  try{
    await mongoose.connect("mongodb+srv://purushothlearn:Purushoth13@nodejs.bal4nhb.mongodb.net",{
      dbName : "fullstackTasks"
    });
    console.log("Connect To MongoBD")

  app.listen(port,()=>{
  console.log(`App is listening to port : ${port}`);
});

  }catch(error){
      console.log(error);
      process.exit(1);
  }
}


bootstrap();

