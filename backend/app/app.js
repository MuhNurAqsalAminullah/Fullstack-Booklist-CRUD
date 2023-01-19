const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/assets", express.static("assets"));

const routes = require("./router/routes");
routes(app);

module.exports = app;
