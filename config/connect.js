const sql = require("mysql2");

const connect = sql.createConnection({
  host:"localhost",
  user:"root",
  password:"Hema@08",
  database:"todolistapp"

});

connect.connect((err)=>{
      if(err) throw err;
      console.log("connected")});

module.exports = connect;

