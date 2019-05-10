const mongoose = require("mongoose")
const Schema = mongoose.Schema

const notnowSchema = new mongoose.Schema({
    /* image: {}, */
    name: {
        type: String,
        required: [true, "The notnow name is required"],
        minlength: 1
    },
    url: {
        type: String,
        required: [true, "The notnow name is required"]
    },
    description: {
        type: String
    }
})

const Notnow = mongoose.model("Notnow", notnowSchema)

module.exports = Notnow
