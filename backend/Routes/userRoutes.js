const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {});
router.post("/login",(req,res,next)=>{});
router.post("/signup",(req,res,next)=>{});
router.patch("/resetPassword",(req,res,next)=>{});

module.exports = router;