const connect = require("../config/connect.js");

function createtasks(req){
  let title = req.body.title;
  let des = req.body.description;
  let status = req.body.status;
  let prio = req.body.priorty;
  let date = req.body.date;

  connect.query("insert into tasks(title,description,status,priority,duedate) values(?,?,?,?,?)",[title,des,status,prio,date],(err,result)=>{
  
      if(err){
        console.log(err.message);
        return;
      }
      console.log("Task added succussfully");
    

      
      
  });
}

module.exports = createtasks;
