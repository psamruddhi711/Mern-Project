const express = require("express");

const pool = require("../db/pool");
const result = require("../utils/result");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

// Get all courses with optional date filtering (admin)
router.get("/all-courses", checkAuthorization, (req, res) => {
  const { startDate, endDate } = req.query;

  let sql = `SELECT * FROM courses WHERE 1=1`;
  const params = [];

  // Add date filters if provided
  if (startDate) {
    sql += ` AND start_date >= ?`;
    params.push(startDate);
  }

  if (endDate) {
    sql += ` AND end_date <= ?`;
    params.push(endDate);
  }

  // Order by start date
  sql += ` ORDER BY start_date ASC`;

  pool.query(sql, params, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// Add a new course (admin)
router.post("/add", checkAuthorization, (req, res) => {
  const { courseName, description, fees, startDate, endDate, videoExpireDays } = req.body;

  // Validate required fields
  if (!courseName || !description || !fees || !startDate || !endDate || !videoExpireDays) {
    return res.send(result.createResult("All fields are required"));
  }

  const sql = `INSERT INTO courses (course_name, description, fees, start_date, end_date, video_expiry_days) 
               VALUES (?, ?, ?, ?, ?, ?)`;

  const params = [courseName, description, fees, startDate, endDate, videoExpireDays];

  pool.query(sql, params, (error, data) => {
    if (error) {
      return res.send(result.createResult(error));
    }
    res.send(result.createResult(null, { 
      message: "Course added successfully",
      courseId: data.insertId
    }));
  });
});

module.exports = router;
