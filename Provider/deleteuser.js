const connect = require("../config/connect.js");

function deleteuser(req,res){
  let id = req.body.id;

  connect.query("delete from tasks where user_id = ?",[id],(err)=>{
    if(err) throw err;
  });
  let q = "delete from users where user_id = ?";
  connect.query(q,[id],(err)=>{
    if(err) throw err; 
  });

  

  res.status(200).send("Deleted successfully");

  //let q2 = "delete from tasks where "
  
}

module.exports = deleteuser;