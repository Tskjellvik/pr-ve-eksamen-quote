const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mongo = "mongodb://127.0.0.1:27017/folkeReg";
const Router = require("./routers/router")
const dbHandler = require("./handlers/dbHandler")


app.use(Router)

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

     
// const insertTestDocument = async () => {
//     try {
//         await mongoose.connect(mongo);
//         console.log('Connected to MongoDB server!');
          
//         const testSchema = new mongoose.Schema({ name: String, value: Number });
//         const Test = mongoose.model('Test', testSchema);
          
//         const testDoc = new Test({ name: 'test', value: 1 });
//         const result = await testDoc.save();
//         console.log('Inserted test document:', result);
          

// };

// insertTestDocument();




//////////////////////////////////

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://10.12.10.111:27017/?directConnection=true&appName=mongosh+2.2.3";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
