const express = require("express")
const Notnow = require("../models/Notnow")
const router = express.Router()
const getTitle = require("get-title-at-url")

// Route to add a new url
router.post("/addurl", (req, res, next) => {
    let { url } = req.body
    getTitle(url, title => {
        console.log(title)
        Notnow.create({ url, title })
            .then(addurl => {
                res.json({
                    success: true,
                    addurl
                })
            })
            .catch(err => next(err))
    })
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
