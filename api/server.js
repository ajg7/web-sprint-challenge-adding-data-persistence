const express = require("express");
const helmet = require("helmet");
const db = require("../data/db-config");
const ProjectRouter = require("../school/project-router");
const ResourceRouter = require("../school/resource-router");
const TaskRouter = require("../school/task-router");


const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})

server.use("/projects", ProjectRouter);

server.use("/resources", ResourceRouter);

server.use("/tasks", TaskRouter);

module.exports = server;