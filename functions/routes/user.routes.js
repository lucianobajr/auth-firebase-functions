const { Router } = require("express");
const { setUser } = require("../controllers/user.controller");

const routes = Router();

routes.post("/", setUser);

module.exports = routes;
