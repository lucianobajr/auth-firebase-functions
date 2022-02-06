const admin = require("firebase-admin");

const adminConfig = require("../config/auth-firebase-46fda-firebase-adminsdk-pqrvp-6e9a027654.json");

if (process.env.NODE_ENV === "development") {
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });
} else {
  admin.initializeApp();
}

const db = admin.firestore();

module.exports = { admin, db };