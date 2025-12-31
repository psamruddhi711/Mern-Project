const express = require("express");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../db/pool");
const result = require("../utils/result");
const config = require("../utils/config");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

/* =========================
   SIGN IN
========================= */
router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

  pool.query(sql, [email, password], (error, data) => {
    if (error) {
      return res.send(result.createResult(error));
    }

    if (data.length === 0) {
      return res.send(result.createResult("Invalid email or password"));
    }

    const user = data[0];

    const payload = {
      uid: user.uid,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, config.SECRET);

    res.send(
      result.createResult(null, {
        email: user.email,
        role: user.role,
        token,
      })
    );
  });
});

/* =========================
   SIGN UP
========================= */
router.post("/signup", (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res.send(result.createResult("Email and password are required"));
  }

  const hashedPassword = cryptojs.SHA256(password).toString();
  const userRole = role || "STUDENT"; // default role

  const sql = `INSERT INTO users (email, password, role) VALUES (?,?,?)`;

  pool.query(sql, [email, hashedPassword, userRole], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/* =========================
   GET USER DETAILS
========================= */
router.get("/details_by_email", (req, res) => {
  const email = req.headers.email;

  const sql = `SELECT * FROM users WHERE email = ?`;

  pool.query(sql, [email], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/* =========================
   ADMIN: ALL STUDENTS
========================= */
router.get("/all-students", checkAuthorization, (req, res) => {
  const sql = `SELECT * FROM users WHERE role = 'STUDENT'`;

  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/* =========================
   ADMIN: DELETE STUDENT
========================= */
router.delete("/delete-user", checkAuthorization, (req, res) => {
  const email = req.headers.email;

  pool.query(
    "DELETE FROM students WHERE email = ?",
    [email],
    (err1) => {
      if (err1) {
        return res.send(result.createResult(err1));
      }

      pool.query(
        "DELETE FROM users WHERE email = ? AND role = 'STUDENT'",
        [email],
        (err2, data) => {
          res.send(result.createResult(err2, data));
        }
      );
    }
  );
});

module.exports = router;
