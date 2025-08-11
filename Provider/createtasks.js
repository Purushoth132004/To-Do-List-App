const connect = require("../config/connect.js");

function createtasks(data) {
  const { title, description, status, priority, duedate, userid } = data;

  connect.query(
    "INSERT INTO tasks(title, description, status, priority, duedate, user_id) VALUES (?, ?, ?, ?, ?, ?)",
    [title, description, status, priority, duedate, userid],
    (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log("Task added successfully");
    }
  );
}


module.exports = createtasks;