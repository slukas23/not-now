const express = require("express")
const passport = require("passport")
const router = express.Router()
const User = require("../models/User")
const Selection = require("../models/Selection")

router.get(
    "/google",
    passport.authenticate("google", {
        // scope: "email"
    })
)

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        successRedirect: "/collections"
    })
)

module.exports = router
