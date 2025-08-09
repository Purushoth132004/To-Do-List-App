const connect = require("../config/connect.js");

function getAllTasks(req,res){

  let word = req.query.id;

  connect.query("select * from tasks where id = ?",[word],(err,result)=>{
    if(err) throw err;
    return res.status(200).json(result);
  });

}

module.exports = getAllTasks;