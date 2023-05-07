import express from "express";

const router = express.Router();

router.get("/:group", function (req, res) {
  var response = `그룹이름 : ${req.params.group}`;
  res.status(200).send(response);
});

export default router;
