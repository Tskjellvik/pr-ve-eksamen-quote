const mongo = "mongodb://127.0.0.1:27017/persReg";
const mongoose = require("mongoose");
const people = require("../models/person")

function connectToDb(cb){
    mongoose.connect(mongo)
    .then((result) => {
        if(result){
            console.log('Connected to the database');
            // people.insertMany([
            //     {name: "John Doe", age: 34},
            //     {name: "John Deer", age: 40}])
            //     .then(()=>{console.log('Data inserted')})
            //     .catch((err)=>console.error(err))
            if(typeof cb === 'function'){
                cb()
            }
        }
        else{
            console.log(`Error connecting to the database: ${result}`);

    
        }})
}

function perReg(cb){
    people.find()
    .then((result)=>{
        cb(result)
    })
}

module.exports = {
    connectToDb,
    perReg
}