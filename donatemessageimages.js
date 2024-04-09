const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
    imageUrl: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now // Set default value to current timestamp
    }
});

module.exports = mongoose.model("donatemessageimages", dataSchema);
