
exports.seed = function(knex) {
  const tasks = [
    {
      description: "Make component",
      notes: "",
      completed: true
    },
    {
      description: "Add action",
      notes: "",
      completed: true
    },
    {
      description: "Add reducer",
      notes: "",
      completed: true
    },
    {
      description: "Make an API request",
      notes: "",
      completed: true
    },
    {
      description: "Install express",
      notes: "",
      completed: true
    },
  ]
  return knex("tasks").insert(tasks);
};
