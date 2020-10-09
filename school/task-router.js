const express = require("express");
const db = require("../data/db-config");

const Tasks = require("./task-model");

const router = express.Router();


router.get("/", (request, response) => {
    Tasks.get()
        .then(tasks => {
            response.status(200).json(tasks)
        })
        .catch(error=> {
            console.log(errror)
            response.status(500).json({error: error.message})
        })
})

router.get("/:id", (request, response) => {
    const { id } = request.params;
    Tasks.getById(id)
        .then(tasks => {
            if (tasks) {
                response.status(200).json(tasks);
            } else {
            response.status(404).json({ error: error.message });
            }
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        });
});

router.post("/", (request, response) => {
    const taskData = request.body;
    Tasks.add(taskData)
        .then(ids => {
            response.status(201).json({ created: ids[0] });
        })
        .catch(err => {
            response.status(500).json({ message: "Failed to create new user" });
        });
});

module.exports = router;