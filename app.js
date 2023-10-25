var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { swaggerDocs } = require("./swagger");
const dbconnection = require("./src/config/conexion");
const multer = require("multer");
const cors = require("cors");
const { format } = require("timeago.js");

var indexRouter = require("./src/routes/routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const storage = multer.diskStorage({
  destination: path.join(__dirname, "src/public"),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage: storage }).single("image"));
app.use(cookieParser());

app.use((req, res, next) => {
  app.locals.format = format;
  next();
});

app.use("/", indexRouter);

app.listen(4000, () => {
  console.log(`[Running] - PORT: 4000`);
  console.log("[Link]    " + "http://localhost:4000");
  swaggerDocs(app, 4000);
});

dbconnection();

module.exports = app;
