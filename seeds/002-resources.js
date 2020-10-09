
exports.seed = function(knex) {
  const resources = [
    {
      name: "Khan Academy",
      description: "Nice introduction to HTML, CSS, and JS",
    },
    {
      name: "Code Academy",
      description: null,
    },
    {
      name: "FreeCodeCamp",
      description: "Free tutorials on most major technologies and languages",
    },
    {
      name: "Training Kit",
      description: "Lambda School's tutorials",
    },
    {
      name: "Fun Fun Functions",
      description: "A youtube series featuring tutorials on JavaScript",
    },
  ]
  return knex("resources").insert(resources);
};