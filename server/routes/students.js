//students.js



const express = require("express");
const cryptojs = require("crypto-js");
const router = express.Router();

const pool = require("../db/pool");
const result = require("../utils/result");


router.post("/register-to-course", (req, res) => {
  const { name, email, course_id, mobile_no } = req.body;

  if (!name || !email || !course_id || !mobile_no) {
    return res.send(
      result.createResult("name, email, course_id, mobile_no are required")
    );
  }

  // Check if user already exists
  const checkUserSql = "SELECT email FROM users WHERE email = ?";

  pool.query(checkUserSql, [email], (err, users) => {
    if (err) {
      return res.send(result.createResult(err));
    }

    // 2️⃣ If user NOT exists → insert into users
    if (users.length === 0) {
      const insertUserSql =
        "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";

      pool.query(
        insertUserSql,
        [email, "12345", "STUDENT"], // default password
        (err2) => {
          if (err2) {
            return res.send(result.createResult(err2));
          }

          insertStudent(res);
        }
      );
    } 
    
    else {
      insertStudent(res);
    }
  });


  function insertStudent(res) {
    const insertStudentSql =
      "INSERT INTO students (name, email, course_id, mobile_no) VALUES (?,?,?,?)";

    pool.query(
      insertStudentSql,
      [name, email, course_id, mobile_no],
      (err3, data) => {
        res.send(result.createResult(err3, data));
      }
    );
  }
});



router.put("/change-password", (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const email = req.headers.email;

  if (!email) {
    return res.send(result.createResult("email header is required"));
  }

  if (!newPassword || !confirmPassword) {
    return res.send(
      result.createResult("newPassword and confirmPassword are required")
    );
  }

  if (newPassword !== confirmPassword) {
    return res.send(
      result.createResult("newPassword and confirmPassword must be same")
    );
  }

  const encryptedPassword = cryptojs.SHA256(newPassword).toString();

  const sql = "UPDATE users SET password = ? WHERE email = ?";

  pool.query(sql, [encryptedPassword, email], (error, data) => {
    res.send(result.createResult(error, data));
  });
});


router.get("/my-courses", (req, res) => {
  const reg_no = req.query.reg_no;

  if (!reg_no) {
    return res.send(result.createResult("reg_no query parameter is required"));
  }

  const sql = `
    SELECT s.reg_no, s.name, c.course_name
    FROM students s
    JOIN courses c ON c.course_id = s.course_id
    WHERE s.reg_no = ?
  `;

  pool.query(sql, [reg_no], (error, data) => {
    res.send(result.createResult(error, data));
  });
});


router.get("/my-course-with-videos", (req, res) => {
  const reg_no = req.query.reg_no;

  if (!reg_no) {
    return res.send(result.createResult("reg_no query parameter is required"));
  }

  const sql = `
    SELECT 
      s.reg_no,
      s.name,
      c.course_name,
      v.video_id,
      v.title,
      v.description,
      v.youtube_url
    FROM students s
    JOIN courses c ON c.course_id = s.course_id
    JOIN videos v ON v.course_id = c.course_id
    WHERE s.reg_no = ?
  `;

  pool.query(sql, [reg_no], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
