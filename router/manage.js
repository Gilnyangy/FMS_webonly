const express = require("express");
const { groupInfo, getfeed, updatefeed } = require("../firebase.js");

const router = express.Router();

router.get("/:group", async function (req, res) {
  const info = await groupInfo(req.params.group);
  const feed = await getfeed(req.params.group);
  if (info == undefined) {
    res.status(404).send("Sorry I did't find It : No Group data");
  } else {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .render("manage", { group: info.name, dry: feed.dry, wet: feed.wet, url: req.params.group });
  }
});
router.get("/:group/update", async function (req, res) {
  await updatefeed(req.params.group, req.query);
  res.status(304).redirect(`/c/${req.params.group}`);
});

export default router;
