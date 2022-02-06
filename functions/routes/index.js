const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ Hello: "Welcome to API! 😁" });
});

module.exports = routes;