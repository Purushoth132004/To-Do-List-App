const connect = require("../config/connect.js");

function updatetasks(req, res) {
  let id = req.body.id; // or req.params.id / req.query.id
  console.log("Updating ID:", id);

  let { title, description, status, priority, duedate } = req.body;

  connect.query(
    "UPDATE tasks SET title=?, description=?, status=?, priority=?, duedate=? WHERE id = ?",
    [title, description, status, priority, duedate, id],
    (err, result) => {
      if (err) throw err;

      if (result.affectedRows === 0) {
        return res.status(404).send("No task found with that ID or data unchanged");
      }

      res.status(200).send("Updated successfully");
    }
  );
}
 module.exports = updatetasks;