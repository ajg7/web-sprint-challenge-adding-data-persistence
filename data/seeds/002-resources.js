
exports.seed = function(knex) {
  const resources = [
    {
      name: "Khan Academy",
      description: "Nice introduction to HTML, CSS, and JS",
      projectID: 1
    },
    {
      name: "Code Academy",
      description: "Premium tutorials on web development",
      projectID: 3
    },
    {
      name: "FreeCodeCamp",
      description: "Free tutorials on most major technologies and languages",
      projectID: 2
    },
    {
      name: "Training Kit",
      description: "Lambda School's tutorials",
      projectID: 4
    },
    {
      name: "Fun Fun Functions",
      description: "A youtube series featuring tutorials on JavaScript",
      projectID: 5
    },
  ]
  return knex("resources").insert(resources);
};