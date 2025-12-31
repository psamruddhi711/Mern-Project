const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const videoRouter = require("./routes/video");
const courseRouter = require("./routes/course"); // ✅ CORRECT
const studentsRouter = require("./routes/students");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/video", videoRouter);
app.use("/course", courseRouter);
app.use("/students", studentsRouter);

app.listen(4000, () => {
  console.log("✅ Backend Server is running on port 4000");
});
