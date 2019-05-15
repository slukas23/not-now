const mongoose = require("mongoose")
const Schema = mongoose.Schema

const notnowSchema = new mongoose.Schema({
    title: {
        type: String
        // required: [true, "The notnow name is required"],
        // minlength: 1
    },
    url: {
        type: String,
        required: [true, "The notnow url is required"]
    }

    /*  id: {
        type: String
    }, */

    //ref: "Selection"
})

const Notnow = mongoose.model("Notnow", notnowSchema)

module.exports = Notnow
