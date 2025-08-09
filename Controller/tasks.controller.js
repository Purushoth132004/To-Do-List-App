const createtaskprovider = require("../Provider/createtasks.js");
const retrivetask = require("../Provider/retrivetasks.js");

async function createtasks(req,res){
    try{
    await createtaskprovider(req);
    return res.status(201).send("New Task Added");
    } catch(err){
        console.log("Error in adding task");
        return res.status(501).send("Failed to add task");

    }


}  

async function retrivetasks(req,res){
    try{
        return await retrivetask(req,res);
    }
    catch(err){
        res.status(404).send("Not retrived");
    }
}

function deletetasks(req,res){

}

function updatetasks(req,res){

}


module.exports = {createtasks,retrivetasks,deletetasks,updatetasks};

