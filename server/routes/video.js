const express = require("express");

const pool = require("../db/pool");
const result = require("../utils/result");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

// Videos Api
/**
 * GET /video/all-videos?courseId=
 * Accessible to logged-in users
 */
router.get("/all-videos", (req, res) => {
  const { course_id } = req.body;

  const sql = `
    SELECT *
    FROM videos
    WHERE course_id = ?
  `;

  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/**
 * POST /video/add
 * Admin / Instructor only
 */
router.post("/add", checkAuthorization, (req, res) => {
  const { video_id, course_id, title, description, youtube_url } = req.body;

  const sql = `
    INSERT INTO videos
    (video_id, course_id, title, description, youtube_url, added_at)
    VALUES (?, ?, ?, ?, ?, CURDATE())
  `;

  pool.query(
    sql,
    [video_id, course_id, title, description, youtube_url],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

/**
 * PUT /video/update
 * Admin / Instructor only
 */
router.put("/update", checkAuthorization, (req, res) => {
     
  const { video_id, title, description, youtube_url } = req.body;

  const sql = `
    UPDATE videos
    SET title = ?, description = ?, youtube_url = ?
    WHERE video_id = ?
  `;

  pool.query(
    sql,
    [title, description, youtube_url, video_id],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});


/**
 * DELETE /video/delete
 * Admin / Instructor only
 */
router.delete("/delete", checkAuthorization, (req, res) => {
  const { video_id } = req.body;

  const sql = `DELETE FROM videos WHERE video_id = ?`;

  pool.query(sql, [video_id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;