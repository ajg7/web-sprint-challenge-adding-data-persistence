const express = require("express");
const db = require("../data/db-config");

module.exports = {
    find,
    add
}

function find() {
    return db("tasks")
        .join("projects", "projects.taskID", "=", "tasks.projectID")
        .select("projects.name", "tasks.description", "projects.description")
}

function add(task) {
    return db("tasks").insert(task, "id")
        .then(ids => {
            const id = ids[0];
            return db("tasks").where({ id }).first();
        })
}