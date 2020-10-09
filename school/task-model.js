const express = require("express");
const db = require("../data/db-config");

module.exports = {
    get,
    add
}

function get() {
    return db("tasks")
        .join("tasks", "projects.taskID", "=", "tasks.projectID")
        .select("projects.name", "projects.description", "tasks.description")
}

function add(project) {
    return db("tasks").insert(project, "id")
        .then(ids => {
            const id = ids[0];
            return db("tasks").where({ id }).first();
        })
}