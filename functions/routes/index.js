const { Router } = require("express");

const routes = Router();

const user = require("./user.routes")

routes.use("/user",user);

routes.get("/", (req, res) => {
  return res.json({ Hello: "Welcome to API! 😁" });
});

routes.get("/terms", (req, res) => {
  return res.json({ terms: true });
});

module.exports = routes;