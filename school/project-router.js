const express = require("express");
const db = require("../data/db-config");

const Projects = require("./project-model");

const router = express.Router();


router.get("/", (request, response) => {
    Projects.get()
        .then(projects => {
            response.status(200).json(projects)
        })
        .catch(error=> {
            console.log(errror)
            response.status(500).json({error: error.message})
        })
})

router.get("/:id", (request, response) => {
    const { id } = request.params;
    Projects.getById(id)
        .then(projects => {
            if (projects) {
                response.status(200).json(projects);
            } else {
            response.status(404).json({ error: error.message });
            }
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        });
});

router.post("/", (request, response) => {
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