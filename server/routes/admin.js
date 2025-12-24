    const express = require("express");
    const router = express.Router();
    const db = require("../db/pool");
    const result = require("../utils/result");

    router.get("/enrolled-students", (req,res)=>{
    const courseId = req.query.courseId 
        const sql = `SELECT * FROM students WHERE course_id=?`;
    db.query(sql,[courseId], (error, data)=>{    
        res.send(result.createResult(error,data));

    });
    });



    module.exports = router;