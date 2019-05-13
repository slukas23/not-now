const express = require("express")
const Notnow = require("../models/Notnow")
const router = express.Router()

// Route to add a new url
router.post("/addurl", (req, res, next) => {
    let { url } = req.body
    Notnow.create({ url })
        .then(addurl => {
            res.json({
                success: true,
                addurl
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
