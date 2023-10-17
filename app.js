var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { swaggerDocs } = require("./swagger");

var indexRouter = require("./src/routes/routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(4000, () => {
  console.log(`[Running] - PORT: 4000`);
  console.log("[Link]    " + "http://localhost:4000");
  swaggerDocs(app, 4000);
});

module.exports = app;
