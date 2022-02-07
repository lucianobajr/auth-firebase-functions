const { Router } = require("express");
const {
  setUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
  getUserByEmail,
  getUserByPhone
} = require("../controllers/user.controller");

const routes = Router();

routes.get("/all", getUsers);
routes.get("/id/:id", getUserById);
routes.get("/phone/:phoneNumber", getUserByPhone);
routes.get("/email/:email", getUserByEmail);
routes.post("/", setUser);
routes.put("/:id", updateUser);
routes.delete("/:id", deleteUser);

module.exports = routes;
