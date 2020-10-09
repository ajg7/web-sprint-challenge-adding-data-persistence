
exports.seed = function(knex) {
  const projects = [
    {
      name: "React Todo List",
      description: "Make a todo list in react",
      completed: true,
      taskID: 1,
      resourceID: 3 
    },
    {
      name: "Weather App",
      description: "Make a weather app in react",
      completed: true,
      taskID: 1,
      resourceID: 4
    },
    {
      name: "Calculator",
      description: "Make a calculator using React-Redux",
      completed: false,
      taskID: 3,
      resourceID: 4
    },
    {
      name: "Coronavirus Tracker",
      description: "Make a coronavirus tracker using the API and React-Redux",
      completed: true,
      taskID: 4,
      resourceID: 3
    },
    {
      name: "Server",
      description: "Make a server in Node JS",
      completed: false,
      taskID: 5,
      resourceID: 5
    },
  ]
  return knex("projects").insert(projects);
};
