const express = require("express");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../db/pool");
const result = require("../utils/result");
const config = require("../utils/config");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

/**
 * ======================
 * SIGN UP
 * ======================
 */
router.post("/signup", (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.send(
      result.createResult("email, password and role are required")
    );
  }

  const hashedPassword = cryptojs.SHA256(password).toString();

  const sql = `
    INSERT INTO users (email, password, role)
    VALUES (?, ?, ?)
  `;

  pool.query(sql, [email, hashedPassword, role], (error, data) => {
    if (error) {
      return res.send(result.createResult(error));
    }
    res.send(result.createResult(null, "Signup successful"));
  });
});

/**
 * ======================
 * SIGN IN / LOGIN
 * ======================
 */
router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send(
      result.createResult("email and password are required")
    );
  }

  const hashedPassword = cryptojs.SHA256(password).toString();

  const sql = `
    SELECT email, role
    FROM users
    WHERE email = ? AND password = ?
  `;

  pool.query(sql, [email, hashedPassword], (error, data) => {
    if (error) {
      return res.send(result.createResult(error));
    }

    if (data.length === 0) {
      return res.send(
        result.createResult("Invalid email or password")
      );
    }

    const user = data[0];

    const payload = {
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, config.SECRET, {
      expiresIn: "1d"
    });

    res.send(
      result.createResult(null, {
        email: user.email,
        role: user.role,
        token
      })
    );
  });
});

/**
 * ======================
 * GET USER BY EMAIL
 * ======================
 */
router.get("/details_by_email", (req, res) => {
  const email = req.headers.email;

  const sql = `SELECT email, role FROM users WHERE email = ?`;

  pool.query(sql, [email], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/**
 * ======================
 * GET ALL STUDENTS (ADMIN)
 * ======================
 */
router.get("/all-students", checkAuthorization, (req, res) => {
  const sql = `SELECT email, role FROM users WHERE role = 'STUDENT'`;
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

/**
 * ======================
 * DELETE STUDENT
 * ======================
 */
router.delete("/delete-user", checkAuthorization, (req, res) => {
  const email = req.headers.email;

  pool.query("DELETE FROM students WHERE email = ?", [email], (err1) => {
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
  });
});

module.exports = router;
