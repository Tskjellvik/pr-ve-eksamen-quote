const express = require('express');
const app = express();

const Router = require("./routers/router");
const dbHandler = require("./handlers/dbHandler");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(Router);

app.listen(6969, () => {
  console.log("Server is running on port 6969");
  dbHandler.connectToDb(()=>{
    console.log('Connected');
  })
});
