const express = require("express");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../db/pool");
const result = require("../utils/result");
const config = require("../utils/config");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();
router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

    pool.query(sql, [email, password], (error, data) => {
        if (error)
            return res.send(result.createResult(error));

        if (data.length === 0)
            return res.send(result.createResult("Invalid email or password"));

        const user = data[0];

        const payload = {
            uid: user.uid,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(payload, config.SECRET);

        res.send(result.createResult(null, {
            email: user.email,
            role: user.role,
            token
        }));
    });
});


///signup
router.post('/signup', (req, res) => {
    const { email, password, role }= req.body
     sql = `INSERT INTO users(email, password, role) VALUES (?,?,?)`
     hashedPassword = cryptojs.SHA256(password).toString()
    pool.query(sql, [ email, hashedPassword, role], (error, data) => {
        res.send(result.createResult(error, data))
    })
})



// get details by email (student)
router.get("/details_by_email", (req, res) => {
  const email = req.headers.email;
  const sql = `SELECT * FROM users WHERE email = ?`;
  pool.query(sql, [email], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// get all students (admin)
router.get("/all-students", checkAuthorization, (req, res) => {
  // const email = req.headers.email;
  const sql = `SELECT * FROM users WHERE role = 'STUDENT'`;
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

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

