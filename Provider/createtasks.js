const connect = require("../config/connect.js");

function createtasks(req){
  let title = req.body.title;
  let des = req.body.description;
  let status = req.body.status;
  let prio = req.body.priority;
  let date = req.body.duedate;
  let userid = req.body.userid;

  connect.query("insert into tasks(title,description,status,priority,duedate,user_id) values(?,?,?,?,?,?)",[title,des,status,prio,date,userid],(err,result)=>{
  
      if(err){
        console.log(err.message);
        return;
      }
      console.log("Task added succussfully");
    

      
      
  });
}

module.exports = createtasks;
