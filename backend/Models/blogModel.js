const mongoose = require("mongoose");
const blogComment = require("./blogComments");

const blogSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    description: String,
    image1:Buffer,
    image2:Buffer,
    image3:Buffer,
    paragraph1:String,
    paragraph2:String,
    paragraph3:String,
    author: String,
    dataOfCreation:Date,
});

module.exports = mongoose.model("Blog",blogSchema);