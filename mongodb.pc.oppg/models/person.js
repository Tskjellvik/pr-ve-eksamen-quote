const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = new Schema({
    name: {
        type: String,
        minLength: 2
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    etternavn: {
        type: String,
        minLength: 2
    }
});


// // Create the User schema
// const personSchema = new Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true }  
// });



const person = mongoose.model('Person', personSchema);
module.exports = person
