const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Selection = require("../models/Selection")

const userSchema = new Schema(
    {
        username: String,
        password: String,
        googleID: String,
        selection: [
            {
                type: Schema.Types.ObjectId,
                ref: "Selection"
            }
        ]
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User
