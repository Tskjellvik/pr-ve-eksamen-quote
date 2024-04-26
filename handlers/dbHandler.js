const mongo = "mongodb://10.12.99.10:27017/?directConnection=true&appName=mongosh+2.2.5";
const mongoose = require("mongoose");
const user = require("../models/users")

function connectToDb(cb){
    mongoose.connect(mongo, {dbName: 'users'})
    .then((result) => {
        if(result){
            console.log('Connected to the database');
            
            
            // user.insertMany([
            //     {name: "John", username: "snowcrash", etternavn: "Doe"},
            //     {name: "John", username: "gerty", etternavn: "Deer"}])
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
    user.find({})
    .then((result)=>{
        cb(result)
    })
    .catch(error => {
        console.log('error: ', error, '/n/n')
    })
}

module.exports = {
    connectToDb,
    perReg
}