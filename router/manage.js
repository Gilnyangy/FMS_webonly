import express from "express";

const router = express.Router();

router.get("/:group", function (req, res) {
  res.status(200).set("Content-Type", "text/html").render("manage", { Group: req.params.group });
});

export default router;
