
exports.seed = function(knex) {
  const tasks = [
    {
      description: "Make component",
      notes: "",
      completed: false, 
      projectID: 1
    },
    {
      description: "Add action",
      notes: "",
      completed: true,
      projectID: 2
    },
    {
      description: "Add reducer",
      notes: "",
      completed: true,
      projectID: 3
    },
    {
      description: "Make an API request",
      notes: "",
      completed: false,
      projectID: 4
    },
    {
      description: "Install express",
      notes: "",
      completed: true,
      projectID: 5
    },
  ]
  return knex("tasks").insert(tasks);
};
