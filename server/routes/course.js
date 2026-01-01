const express = require("express");
const pool = require("../db/pool");
const result = require("../utils/result");
const { authUser, checkAuthorization } = require("../utils/auth");

const router = express.Router();

/* ==========================
   GET ALL COURSES (PUBLIC)
========================= */
router.get("/all-courses", (req, res) => {
  pool.query("SELECT * FROM courses", (error, data) => {
    return res.send(result.createResult(error, data));
  });
});

/* =========================
   ADD COURSE (ADMIN)
========================= */
router.post("/add", authUser, checkAuthorization, (req, res) => {
  console.log("ADD COURSE BODY:", req.body);
  console.log("USER:", req.user);

  const {
    courseName,
    description,
    fees,
    startDate,
    endDate,
    videoExpireDays,
  } = req.body;

  const sql = `
    INSERT INTO courses
    (course_name, description, fees, start_date, end_date, video_expiry_days)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  pool.query(
    sql,
    [courseName, description, fees, startDate, endDate, videoExpireDays],
    (error, data) => {
      console.log("ADD ERROR:", error);
      console.log("ADD RESULT:", data);
      return res.send(result.createResult(error, data));
    }
  );
});

/* =========================
   UPDATE COURSE (ADMIN)
========================= */
router.put("/update/:courseId", authUser, checkAuthorization, (req, res) => {
  const { courseId } = req.params;

  const {
    courseName,
    description,
    fees,
    startDate,
    endDate,
    videoExpireDays,
  } = req.body;

  const sql = `
    UPDATE courses
    SET course_name=?, description=?, fees=?, start_date=?, end_date=?, video_expiry_days=?
    WHERE course_id=?
  `;

  pool.query(
    sql,
    [
      courseName,
      description,
      fees,
      startDate,
      endDate,
      videoExpireDays,
      courseId,
    ],
    (error, data) => {
      return res.send(result.createResult(error, data));
    }
  );
});

/* =========================
   DELETE COURSE (ADMIN)
========================= */
router.delete("/delete/:courseId", authUser, checkAuthorization, (req, res) => {
  const { courseId } = req.params;

  const sql = `DELETE FROM courses WHERE course_id = ?`;

  pool.query(sql, [courseId], (error, data) => {
    console.log("DELETE ERROR:", error);
    console.log("DELETE RESULT:", data);
    return res.send(result.createResult(error, data));
  });
});

module.exports = router;