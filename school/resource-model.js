const express = require("express");
const db = require("../data/db-config");

module.exports = {
    find,
    getById,
    add
}

function find() {
    return db("resources");
}

function getById(id) {
    return db("resources").where("id", "=", id);
}

function add(project) {
    return db("resources").insert(project, "id")
        .then(ids => {
            const id = ids[0];
            return db("resources").where({ id }).first();
        })
}