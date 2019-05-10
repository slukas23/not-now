const express = require("express")
const Selection = require("../models/Selection")
const router = express.Router()

// Route to get all selection
router.get("/", (req, res, next) => {
    Selection.find()
        .then(selections => {
            res.json(selections)
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

// Route to update a selection NEW

router.put("/:id", (req, res) => {
    Selection.findOneAndUpdate(req.params.id, req.body, { new: true })
        .then(selection => {
            console.log("edit successfully!")
            // .status() optional
            res.status(200).json({
                message: "ok",
                selection: selection
            })
        })
        .catch(error => {
            res.json(error)
        })
})

// Route to delete a selection NEW

router.delete("/:id", (req, res) => {
    Selection.findOneAndDelete(req.params.id)
        .then(selection => {
            console.log("deleted successfully!")
            // .status() optional
            res.status(200).json({ message: "ok", selection: selection })
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = router
