const mongoose = require("mongoose");
const { Schema } = mongoose;
const PASSFEEDBACK = `password is required`;
const PASSLENGTH = 6;

// Create the Post schema

// Post schema
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
});

const post = mongoose.model('post', postSchema);

// Create the User schema
const usersSchema = new Schema({
    username: { 
        type: String,
        required: true
        },
    password: {
        type: String,
        required: [true, PASSFEEDBACK],
        minlength: PASSLENGTH
    },
    post: [postSchema]
});

const user = mongoose.model('user', usersSchema);

module.exports = user;
