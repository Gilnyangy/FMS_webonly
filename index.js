const dotenv = require("dotenv");
const express = require("express");
const manage = require("./router/manage.js");

dotenv.config();

const app = express();
/** for Nomal Hosting setUP */
// const port = process.env.SERVICE_PORT;

app.set("view engine", "ejs");
app.set("views", "./page");
app.use(express.json());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.status(200).send("Dev now");
});

/** Routing */
app.use("/page", express.static("page"));
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use("/c", manage);

/** for Nomal Hosting setUP */
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

/** for FirebaseHosting service */
exports.app = functions.https.onRequest(app);
