const connect = require("../config/connect.js");

function createuser(req,res){
  let fname = req.body.firstname;
  let lname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;
    try{
    connect.query("insert into users(first_name,last_name,email_id,password) values(?,?,?,?)",[fname,lname,email,password],(err)=>{
    if(err) throw err;
    res.status(200).send("Gosh New User Added Successfully");
    

  }
);}catch(err){
  console.log(err);
}

}

module.exports = createuser;
