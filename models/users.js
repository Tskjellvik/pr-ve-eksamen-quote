const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create the User schema
const usersSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    etternavn: { type:String, require: true} 
});

const users = mongoose.model('users', usersSchema);

module.exports = users
