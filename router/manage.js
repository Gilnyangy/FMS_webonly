import express from "express";
import { groupInfo } from "../firebase.js";

const router = express.Router();

router.get("/:group", async function (req, res) {
  const info = await groupInfo(req.params.group);
  if (info == undefined) {
    res.status(404).send("Sorry I did't find It : No Group data");
  } else {
    res.status(200).set("Content-Type", "text/html").render("manage", { Group: info.name, cat: info.cat });
  }
});

export default router;
