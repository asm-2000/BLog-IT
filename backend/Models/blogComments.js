const mongoose = require("mongoose");

const blogCommentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: String,
    commentText: String,
    creationDate: Date
});

module.exports = mongoose.model("blogComment", blogCommentSchema);