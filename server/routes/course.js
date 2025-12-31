const express = require("express");
const pool = require("../db/pool");
const result = require("../utils/result");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

/* GET ALL COURSES */
router.get("/all-courses", (req, res) => {
  pool.query("SELECT * FROM courses", (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/* ADD COURSE (ADMIN) */
router.post("/add", checkAuthorization, (req, res) => {
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
      if (error) {
        console.error("INSERT ERROR:", error);
        return res.send(result.createResult(error));
      }

      res.send(
        result.createResult(null, {
          message: "Course added successfully",
          id: data.insertId,
        })
      );
    }
  );
});

/* UPDATE COURSE */
router.put("/update/:courseId", checkAuthorization, (req, res) => {
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
      if (error) return res.send(result.createResult(error));
      res.send(result.createResult(null, "Course updated successfully"));
    }
  );
});

/* DELETE COURSE */
router.delete("/delete/:courseId", checkAuthorization, (req, res) => {
  const { courseId } = req.params;

  pool.query(
    "DELETE FROM courses WHERE course_id = ?",
    [courseId],
    (error) => {
      if (error) return res.send(result.createResult(error));
      res.send(result.createResult(null, "Course deleted successfully"));
    }
  );
});

module.exports = router;
