const express = require("express");
const db = require("../data/db-config");

const Resources = require("./resource-model");

const router = express.Router();


router.get("/", (request, response) => {
    Resources.get()
        .then(resources => {
            response.status(200).json(resources)
        })
        .catch(error=> {
            console.log(errror)
            response.status(500).json({error: error.message})
        })
})

router.get("/:id", (request, response) => {
    const { id } = request.params;
    Resources.getById(id)
        .then(resources => {
            if (resources) {
                response.status(200).json(resources);
            } else {
            response.status(404).json({ error: error.message });
            }
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        });
});

router.post("/", (request, response) => {
    const resourceData = request.body;
    Resources.add(resourceData)
        .then(ids => {
            response.status(201).json({ created: ids[0] });
        })
        .catch(error => {
            response.status(500).json({ message: "Failed to create new user" });
        });
});

module.exports = router;