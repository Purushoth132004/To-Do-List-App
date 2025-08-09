const createtaskprovider = require("../Provider/createtasks.js");
const retrivetask = require("../Provider/retrivetasks.js");
const updatetask = require("../Provider/updatetasks.js");
const deletetask = require("../Provider/deletetasks.js");

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

async function deletetasks(req,res){
    try{
        return await deletetask(req,res);
    }
    catch(err){
        res.status(404).send("Not deleted");
    }


}

async function updatetasks(req,res){
    try{
    return await updatetask(req,res);
    }catch(err){
        console.log("Not updated")
        res.status(400).send("Not updated");
    }

}


module.exports = {createtasks,retrivetasks,deletetasks,updatetasks};

