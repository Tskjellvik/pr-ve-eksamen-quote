const { inex, logginn, signup, upage} = require("../controllers/controller");
const Router = require('express').Router();

Router.get("/", inex)
Router.get("/logginn", logginn)
Router.post("/logginn", logginn)
Router.get("/signup", signup)
Router.post("/signup", signup)
Router.get("/upage", upage)
Router.post("/upage", upage)




module.exports = Router
