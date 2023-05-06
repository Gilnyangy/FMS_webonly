import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
/** for Nomal Hosting setUP */
const port = process.env.SERVICE_PORT;

app.get("/", function (req, res) {
  res.status(200).send("Dev now");
});

/** for Nomal Hosting setUP */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/** for FirebaseHosting service */
// exports.app = functions.https.onRequest(app);