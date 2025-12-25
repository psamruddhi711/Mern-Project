const express = require("express");
const router = express.Router();

const videoController = require("../routes/video");
const { authUser, checkAuthorization } = require("../utils/auth");

// Logged-in users
router.get(
  "/all-videos",
  authUser,
  videoController.getAllVideos
);

// Admin / Instructor only
router.post(
  "/add",
  authUser,
  checkAuthorization,
  videoController.addVideo
);

router.put(
  "/update/:videoId",
  authUser,
  checkAuthorization,
  videoController.updateVideo
);

router.delete(
  "/delete/:videoId",
  authUser,
  checkAuthorization,
  videoController.deleteVideo
);

module.exports = router;

const db = require("../db/pool");

/**
 * GET /video/all-videos?courseId=
 */
exports.getAllVideos = (req, res) => {
  const { courseId } = req.query;

  const sql = `
    SELECT video_id, course_id, title, description, youtube_url, added_at
    FROM videos
    WHERE course_id = ?
  `;

  db.query(sql, [courseId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(result);
  });
};

/**
 * POST /video/add
 */
exports.addVideo = (req, res) => {
  const { video_id, course_id, title, description, youtube_url } = req.body;

  const sql = `
    INSERT INTO videos
    (video_id, course_id, title, description, youtube_url, added_at)
    VALUES (?, ?, ?, ?, ?, CURDATE())
  `;

  db.query(
    sql,
    [video_id, course_id, title, description, youtube_url],
    err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to add video" });
      }
      res.json({ message: "Video added successfully" });
    }
  );
};

/**
 * PUT /video/update/:videoId
 */
exports.updateVideo = (req, res) => {
  const { videoId } = req.params;
  const { course_id, title, description, youtube_url } = req.body;

  const sql = `
    UPDATE videos
    SET course_id = ?, title = ?, description = ?, youtube_url = ?
    WHERE video_id = ?
  `;

  db.query(
    sql,
    [course_id, title, description, youtube_url, videoId],
    err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to update video" });
      }
      res.json({ message: "Video updated successfully" });
    }
  );
};

/**
 * DELETE /video/delete/:videoId
 */
exports.deleteVideo = (req, res) => {
  const { videoId } = req.params;

  const sql = "DELETE FROM videos WHERE video_id = ?";

  db.query(sql, [videoId], err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to delete video" });
    }
    res.json({ message: "Video deleted successfully" });
  });
};
