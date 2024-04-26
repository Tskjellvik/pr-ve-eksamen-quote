const mongo = "mongodb+srv://gerty:Passord1@cluster0.gr4ywoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require("mongoose");
const people = require("../models/users")

function connectToDb(cb){
    mongoose.connect(mongo, {dbName: 'users'})
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
        }else{
            console.log(`Error connecting to the database: ${result}`);
        }})
    .catch(err => {
        console.log('connectionerror: ', err, '/n/n')
    })
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