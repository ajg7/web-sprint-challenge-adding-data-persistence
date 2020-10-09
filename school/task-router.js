const express = require("express");
const db = require("../data/db-config");

const Tasks = require("./task-model");

const router = express.Router();


router.get("/s", (request, response) => {
    Tasks.findSorted()
        .then(tasks => {
            response.status(200).json(tasks)
        })
        .catch(error=> {
            console.log(error)
            response.status(500).json({error: error.message})
        })
})

router.get("/", (request, response) => {
    Tasks.find()
        .then(tasks => {
            response.status(200).json(tasks)
        })
        .catch(error=> {
            console.log(error)
            response.status(500).json({error: error.message})
        })
})

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