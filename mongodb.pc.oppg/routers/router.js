const { inex } = require("../controllers/controller");
const Router = require('express').Router();

Router.get("/", inex)

module.exports = Router
