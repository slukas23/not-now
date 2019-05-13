const mongoose = require("mongoose")
const Schema = mongoose.Schema

const selectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The Selection name is required"],
        minlength: 1
    },

    description: {
        type: String
    },

    /*  imgUrl: {
        type: String
    }, */
    notnow: [
        {
            type: Schema.Types.ObjectId,
            ref: "Notnow"
        }
    ]
})

const Selection = mongoose.model("Selection", selectionSchema)

module.exports = Selection
