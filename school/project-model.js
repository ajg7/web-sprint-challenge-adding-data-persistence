const db = require("../data/db-config");

module.exports = {
    find,
    getById,
    add
}

function find() {
    return db("projects");
}

function getById(id) {
    return db("projects").where("id", "=", id);
}

function add(project) {
    return db("projects").insert(project, "id")
        .then(ids => {
            const id = ids[0];
            return db("projects").where({ id }).first();
        })
}