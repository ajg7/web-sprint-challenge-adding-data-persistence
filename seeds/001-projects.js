
exports.seed = function(knex) {
  const projects = [
    {
      name: "React Todo List",
      description: "Make a todo list in react",
      completed: true,
    },
    {
      name: "Weather App",
      description: "Make a weather app in react",
      completed: true,
    },
    {
      name: "Calculator",
      description: "Make a calculator using React-Redux",
      completed: false,
    },
    {
      name: "Coronavirus Tracker",
      description: "Make a coronavirus tracker using the API and React-Redux",
      completed: true,
    },
    {
      name: "Server",
      description: "Make a server in Node JS",
      completed: false,
    },
  ]
};
