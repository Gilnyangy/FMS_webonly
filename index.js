import dotenv from "dotenv";
import express from "express";
import manage from "./router/manage.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./page");
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("Dev now");
});

/** Routing */
app.use("/page", express.static("page"));
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use("/c", manage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
