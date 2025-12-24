const db = require("../db/pool");

exports.getAllVideos = (req, res) => {
  const { courseId } = req.query;

  const sql = "SELECT * FROM videos WHERE course_id=?";
  db.query(sql, [courseId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.addVideo = (req, res) => {
  const { courseId, title, youtubeURL, description } = req.body;

  const sql = `
    INSERT INTO videos (course_id, title, youtube_url, description, added_at)
    VALUES (?, ?, ?, ?, CURDATE())
  `;

  db.query(sql, [courseId, title, youtubeURL, description], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Video added successfully" });
  });
};

exports.updateVideo = (req, res) => {
  const { videoId } = req.params;
  const { courseId, title, youtubeURL, description } = req.body;

  const sql = `
    UPDATE videos
    SET course_id=?, title=?, youtube_url=?, description=?
    WHERE video_id=?
  `;

  db.query(
    sql,
    [courseId, title, youtubeURL, description, videoId],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Video updated successfully" });
    }
  );
};

exports.deleteVideo = (req, res) => {
  const sql = "DELETE FROM videos WHERE video_id=?";
  db.query(sql, [req.params.videoId], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Video deleted successfully" });
  });
};
