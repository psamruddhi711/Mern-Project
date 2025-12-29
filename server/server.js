const express = require("express");
const cors = require("cors");
//const {authUser} = require("./utils/auth");
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const videoRouter = require("./routes/video");
const courseRouter = require('./routes/course');
const studentRouter = require("./routes/student");

// const courseRoutes = require('./routes/course');
// app.use('/course', courseRoutes);

const { authUser, checkAuthorization } = require("./utils/auth");
const app = express();

// middlewares
app.use(express.json());
app.use(authUser);

app.use("/admin", adminRouter);
app.use("/course", courseRouter);
app.use("/video", videoRouter);
app.use("/users", userRouter);
app.use("/student", studentRouter);
//app.use(checkAuthorization);


app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
