const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    username: String,
    password:String,
    contactNumber: String,
    dob: Date,
    location: String,
});

module.exports = mongoose.model('User', userSchema);
