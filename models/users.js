const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create the User schema
const usersSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    etternavn: { type:String, require: true} 
});

const user = mongoose.model('user', usersSchema);

module.exports = user
