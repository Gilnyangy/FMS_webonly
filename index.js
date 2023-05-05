import dotenv from "dotenv";
import express from "express";
import { getdb } from "./firebase.js";

dotenv.config();

const app = express();
const port = process.env.SERVICE_PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
