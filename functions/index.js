require("dotenv/config");

const functions = require("firebase-functions");
const express = require("express");
const swaggerUi = require("swagger-ui-express");

//files required
const routes = require("./routes");
const swaggerDocs = require("./docs");

// start environment
const app = express();
const cors = require("cors");

app.use(cors({ origin: true }));
app.use(express.json());

app.set("Access-Control-Allow-Origin", "*");
app.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
app.set("Access-Control-Allow-Headers", "*");

app.use(routes);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

exports.api = functions.https.onRequest(app);
