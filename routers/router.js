const { inex, logginn, signup } = require("../controllers/controller");
const Router = require('express').Router();

Router.get("/", inex)
Router.get("/logginn", logginn)
Router.post("/logginn", logginn)
Router.get("/signup", signup)
Router.post("/signup", signup)

module.exports = Router
