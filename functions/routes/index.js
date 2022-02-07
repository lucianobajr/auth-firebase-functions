const { Router } = require("express");

const routes = Router();

const user = require("./user.routes")

routes.use("/user",user);

routes.get("/", (req, res) => {
  return res.json({ Hello: "Welcome to API! 😁" });
});

module.exports = routes;