const users = require("./users");
const userWithId = require("./userWithId");
const userPhone = require("./userPhone");
const userEmail = require("./userEmail");
const user = require("./user");
const userId = require("./userId");

module.exports = {
  "/user/all": users,
  "/user/id/{id}": userWithId,
  "/user/phone/{phoneNumber}": userPhone,
  "/user/email/{email}": userEmail,
  "/user": user,
  "/user/{id}": userId,
};
