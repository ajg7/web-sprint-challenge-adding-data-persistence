const express = require("express");
const db = require("../data/db-config");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (request, response) => {
    console.log("c")
    Projects.find()
        .then(projects => {
            response.status(200).json(projects)
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({message: error.message})
        })
})

router.get("/:id", (request, response) => {
    Projects.getById(request.params.id)
        .then(projects => {
            if (projects) {
                response.json(projects);
            } else {
            response.status(404).json({ error: error.message });
            }
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        });
});

router.post("/", (request, response) => {
    console.log("a")
    const projectData = request.body;
    Projects.add(projectData)
        .then(ids => {
            response.status(201).json({ created: ids[0] });
        })
        .catch(err => {
            response.status(500).json({ message: "Failed to create new user" });
        });
});

module.exports = router;