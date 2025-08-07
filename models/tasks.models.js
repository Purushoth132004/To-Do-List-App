const { Schema , model } = require("mongoose");
const taskSchema = new Schema({
  title : {
    type : String,
    required : [true,"Task is required "],
    trim : true,
    maxLength : [100," Title cannot be more than 100 characters "],
  },

  description : {
    type : String ,
    required : [ true, "Task description required"],
    trim : true,
    maxLength :[500,"Description Cannot be more than 500"],
  },

  status:{
    type : String ,
    required:[true,"Task status is required "],
    enum : ["todo","inprogress","completed"],
    default : "todo",
  },

    priority:{
    type : String,
    required:[true,"Priority status is required "],
    enum : ["low","normal","high"],
    default : "todo",
  },

  dueDate : {
    type : Date,
    required : [true , "Task due date is required "],
  },


},{ timestamps : true , versionKey:false });


const Task = model("Task",taskSchema);

module.exports = Task;