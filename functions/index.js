require("dotenv/config");

const functions = require("firebase-functions");
const express = require("express");

//files required
const routes = require("./routes");

// start environment
const app = express();
const cors = require("cors");

app.use(cors({ origin: true }));
app.use(express.json());

app.set("Access-Control-Allow-Origin", "*");
app.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
app.set("Access-Control-Allow-Headers", "*");

app.use(routes);

exports.api = functions.https.onRequest(app);
