const express = require("express")
const Notnow = require("../models/Notnow")
const router = express.Router()
const Selection = require("../models/Selection")

// Route to add a url to existing selection
router.post("/:selectionId/add/:urlId", (req, res, next) => {
    let { selectionId } = req.params
    let { urlId } = req.params
    Notnow.findOne({ _id: urlId })
        .then(addurl => {
            console.log(addurl)
            Selection.findByIdAndUpdate({ _id: selectionId }, { $push: { notnow: addurl } }).then(selection => {
                res.json({
                    success: true
                })
            })
        })
        .catch(err => next(err))
})

// Route to get an existing url

router.get("/geturl", (req, res, next) => {
    Notnow.find()
        .then(addurls => {
            res.json(addurls)
        })
        .catch(err => next(err))
})

module.exports = router
