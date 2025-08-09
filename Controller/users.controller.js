
const  createuser = require("../Provider/createuser.js"); 
const  deleteuser = require("../Provider/deleteuser.js");

async function createuserhandler(req,res){
  try{
  await createuser(req,res);
}catch(err){
  res.status(404).send("Unable to create user");
}
}
async function deleteuserhandler(req,res){
  try{
    await deleteuser(req,res);
  }catch(err){
    res.status(404).send("Unable to delete user");
  }
}

module.exports = {createuserhandler,deleteuserhandler};