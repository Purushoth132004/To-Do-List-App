const connect = require("../config/connect.js");

function deletetasks(req,res){
  let id  = req.body.id;
  let q = "delete from tasks where id = ?";
  connect.query(q,[id],(err)=>{
    if(err) throw err;
    return res.status(200).send("deleted Sucessfully");
  });

}

module.exports = deletetasks;
