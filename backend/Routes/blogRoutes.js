const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Blog = require("../Models/blogModel");

router.get("/", (req, res, next) => {});
router.post("/createBlog",(req,res)=>{
    const blogData = res.body;
    const blog = new Blog(
        {
            _id:new mongoose.Types.ObjectId(),
            title:blogData.blogTitle,
            description:blogData.blogDescription,
            image1:blogData.image1,
            image2:blogData.image2,
            image3:blogData.image3,
            paragraph1:blogData.paragraph1,
            paragraph2:blogData.paragraph2,
            paragraph3:blogData.paragraph3,
            dateOfCreation:blogData.dateOfCreation
        }
    );
    blog
    .save()
    .then(() => res.status(201))
    .catch((err) => res.status(500).json({result:"Server Failure ! Try Again"}));

})

module.exports = router;
