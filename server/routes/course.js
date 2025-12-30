const express = require("express");
const pool = require("../db/pool");
const result = require("../utils/result");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

/**
 * GET ALL COURSES (ADMIN)
 * Optional filters: start_date, end_date
 * Example:
 * /courses/all-courses?start_date=2024-01-10&end_date=2024-03-10
 */
router.get("/all-courses", (req, res) => {
  const { start_date, end_date } = req.query;

  let sql = `SELECT * FROM courses WHERE 1=1`;
  const params = [];

  if (start_date) {
    sql += ` AND start_date >= ?`;
    params.push(start_date);
  }

  if (end_date) {
    sql += ` AND end_date <= ?`;
    params.push(end_date);
  }

  sql += ` ORDER BY start_date ASC`;

  pool.query(sql, params, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/**
 * ADD COURSE (ADMIN)
 */
router.post("/add", checkAuthorization, (req, res) => {
  const {
    courseName,
    description,
    fees,
    startDate,
    endDate,
    videoExpireDays
  } = req.body;

  if (!courseName || !description || !fees || !startDate || !endDate || !videoExpireDays) {
    return res.send(result.createResult("All fields are required"));
  }

  // 1️⃣ Get next course_id
  const getIdSql = `SELECT IFNULL(MAX(course_id), 0) + 1 AS nextId FROM courses`;

  pool.query(getIdSql, (err, idResult) => {
    if (err) {
      return res.send(result.createResult(err));
    }

    const nextCourseId = idResult[0].nextId;

    // 2️⃣ Insert with course_id
    const insertSql = `
      INSERT INTO courses 
      (course_id, course_name, description, fees, start_date, end_date, video_expiry_days)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      nextCourseId,
      courseName,
      description,
      fees,
      startDate,
      endDate,
      videoExpireDays
    ];

    pool.query(insertSql, params, (error) => {
      if (error) {
        return res.send(result.createResult(error));
      }

      res.send(
        result.createResult(null, {
          message: "Course added successfully",
          courseId: nextCourseId
        })
      );
    });
  });
});


/**
 * UPDATE COURSE (ADMIN)
 */
router.put("/update/:courseId", checkAuthorization, (req, res) => {
  const { courseId } = req.params;
  const {
    courseName,
    description,
    fees,
    startDate,
    endDate,
    videoExpireDays
  } = req.body;

  if (!courseName || !description || !fees || !startDate || !endDate || !videoExpireDays) {
    return res.send(result.createResult("All fields are required"));
  }

  const sql = `
    UPDATE courses
    SET course_name = ?, description = ?, fees = ?, 
        start_date = ?, end_date = ?, video_expiry_days = ?
    WHERE course_id = ?
  `;

  const params = [
    courseName,
    description,
    fees,
    startDate,
    endDate,
    videoExpireDays,
    courseId
  ];

  pool.query(sql, params, (error, data) => {
    if (error) {
      return res.send(result.createResult(error));
    }

    if (data.affectedRows === 0) {
      return res.send(result.createResult("Course not found"));
    }

    res.send(
      result.createResult(null, {
        message: "Course updated successfully",
        courseId
      })
    );
  });
});

/**
 * DELETE COURSE (ADMIN)
 */
router.delete("/delete/:courseId", checkAuthorization, (req, res) => {
  const { courseId } = req.params;

  const sql = `DELETE FROM courses WHERE course_id = ?`;

  pool.query(sql, [courseId], (error, data) => {
    if (error) {
      return res.send(result.createResult(error));
    }

    if (data.affectedRows === 0) {
      return res.send(result.createResult("Course not found"));
    }

    res.send(
      result.createResult(null, {
        message: "Course deleted successfully",
        courseId
      })
    );
  });
});

/**
 * CURRENT COURSES (USER)
 */
router.get("/current-courses", (req, res) => {
  const sql = `
    SELECT * FROM courses
    WHERE CURDATE() BETWEEN start_date AND end_date
  `;

  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});
