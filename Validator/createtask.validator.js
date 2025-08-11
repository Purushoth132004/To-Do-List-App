const {body} = require("express-validator");

const taskvalidator = [
  body("title","Title is required").notEmpty(),
  body("title","Title should be string").isString(),
  body("duedate","Enter a valid date").notEmpty().isDate(),
  body("priority").trim().toLowerCase(),
  body("priority","Priority should be (high , low , morderate ").isIn(["high","low","moderate"]),
  body("status").trim().toLowerCase(),
  body("status","Status should be (to-do,progress,completed").isIn(["to-do","low","high"]),
  body("description","Description cannot be empty").notEmpty(),
  body("userid","Enter a valid userid").notEmpty()

];

module.exports = taskvalidator;