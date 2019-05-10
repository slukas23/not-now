const express = require("express")
const Selection = require("../models/Selection")

const router = express.Router()

// Route to get all selection
router.get("/", (req, res, next) => {
    Selection.find()
        .then(selection => {
            res.json(selection)
        })
        .catch(err => next(err))
})

// Route to add a selection
router.post("/", (req, res, next) => {
    let { /* image */ name, description } = req.body
    Selection.create({ /* image */ name, description })
        .then(selection => {
            res.json({
                success: true,
                selection
            })
        })
        .catch(err => next(err))
})

// Route to get one selection by id

router.get("/:id", (req, res, next) => {
    let selectionId = req.params.id
    Selection.findOne({ _id: selectionId })
        .then(selection => {
            res.json(selection)
        })
        .catch(err => next(err))
})

module.exports = router
