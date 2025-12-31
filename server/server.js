const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const videoRouter = require("./routes/video");
const courseRouter = require("./routes/course");
const studentsRouter = require("./routes/students");

const { authUser, checkAuthorization } = require("./utils/auth");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// public routes
//app.use("/users", userRouter);

// protected routes
//app.use("/students", studentsRouter);
//app.use("/course", courseRouter);
//app.use("/video", videoRouter);
//app.use("/admin", adminRouter);

console.log("usersRouter:", typeof userRouter);
console.log("adminRouter:", typeof adminRouter);
console.log("videoRouter:", typeof videoRouter);
console.log("courseRouter:", typeof courseRouter);
console.log("studentsRouter:", typeof studentsRouter);


app.listen(4000, () => {
  console.log("✅ Backend Server is running on port 4000");
});
