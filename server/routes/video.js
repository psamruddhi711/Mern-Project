const express = require("express");
const router = express.Router();
const videoUtil = require("../utils/video.util");

router.get("/all-videos", videoUtil.getAllVideos);
router.post("/add", videoUtil.addVideo);
router.put("/update/:videoId", videoUtil.updateVideo);
router.delete("/delete/:videoId", videoUtil.deleteVideo);

module.exports = router;


