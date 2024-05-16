const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const blogRoute = require("./Routes/blogRoutes");
const userRoutes = require("./Routes/userRoutes");

const app = express();

mongoose
  .connect("mongodb://0.0.0.0/testDB")
  .then(() => {
    console.log("Database connected sucessfully");
  })
  .catch(() => {
    console.log("Error connecting to database..");
  });

app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/userRoutes',userRoutes);
app.use('/blogRoutes',blogRoute);

app.use((req,res,next)=>{
    const error = new Error("Cannot find the requested page !!");
    error.status = 404;
    next(error);
})

app.use((error,req,res)=>{
   res.status(error.status).json({
    message: error.message
   }) 

})




module.exports = app;
