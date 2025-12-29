const express = require("express");

const pool = require("../db/pool");
const result = require("../utils/result");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

/**
 * POST /student/register-tocourse
 * Register student to a course
 */
router.post("/register-tocourse", (req, res) => {
  const { course_id, email, name, mobile_no } = req.body;

  const sql = `
    INSERT INTO students
    (course_id, email, name, mobile_no, registered_at)
    VALUES (?, ?, ?, ?, CURDATE())
  `;

  pool.query(
    sql,
    [course_id, email, name, mobile_no],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

/**
 * PUT /student/changepassword
 * Change student password
 * Logged-in student only
 */
router.put("/changepassword", checkAuthorization, (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const { email } = req.user; // from JWT

  if (newPassword !== confirmPassword) {
    return res.send(
      result.createResult("Passwords do not match")
    );
  }

  const sql = `
    UPDATE students
    SET password = ?
    WHERE email = ?
  `;

  pool.query(
    sql,
    [newPassword, email],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

/**
 * GET /student/my-courses
 * Get all registered courses of student
 */
router.get("/my-courses", checkAuthorization, (req, res) => {
  const { email } = req.user;

  const sql = `
    SELECT c.course_id, c.course_name, c.start_date, c.end_date
    FROM courses c
    JOIN student_courses sc ON c.course_id = sc.course_id
    WHERE sc.email = ?
  `;

  pool.query(sql, [email], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/**
 * GET /student/my-coursewith-videos
 * Get registered courses with valid videos
 */
router.get("/my-coursewith-videos", checkAuthorization, (req, res) => {
  const { email } = req.user;

  const sql = `
    SELECT 
      c.course_id,
      c.course_name,
      v.video_id,
      v.title,
      v.description,
      v.youtube_url
    FROM student_courses sc
    JOIN courses c ON sc.course_id = c.course_id
    JOIN videos v ON v.course_id = c.course_id
    WHERE sc.email = ?
      AND DATEDIFF(CURDATE(), v.added_at) <= c.video_expiry_days
  `;

  pool.query(sql, [email], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
