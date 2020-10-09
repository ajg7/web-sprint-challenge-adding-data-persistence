const express = require("express");
const db = require("../data/db-config");

module.exports = {
    get,
    getById,
    add
}

function get() {
    return db("tasks");
}

function getById(id) {
    return db("tasks").where({ id }).first();
}

function add(project) {
    return db("tasks").insert(project, "id")
        .then(ids => {
            const id = ids[0];
            return db("tasks").where({ id }).first();
        })
}