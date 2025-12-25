    const express = require("express");
    const router = express.Router();
    const db = require("../db/pool");
    const result = require("../utils/result");
const { checkAuthorization, authUser } = require("../utils/auth");
const pool = require("../db/pool");




    router.get("/enrolled-students-courses", authUser, checkAuthorization,(req, res)=>{
    const {course_id } = req.body; 
        const sql = `SELECT * FROM students WHERE course_id=?`;
    db.query(sql,[course_id], (error, data)=>{    
        res.send(result.createResult(error,data));

    });
    });
    


    module.exports = router;