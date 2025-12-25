const express = require("express");
const cors = require("cors");
//const {authUser} = require("./utils/auth");
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const videoRoutes = require("./routes/video");

app.use("/video", videoRoutes);

// const courseRoutes = require('./routes/course');
// app.use('/course', courseRoutes);
const courseRouter = require('./routes/course');
const { authUser, checkAuthorization } = require("./utils/auth");
const app = express();

// middlewares
app.use(express.json());
app.use(authUser);

<<<<<<< HEAD
app.use("/admin", adminRouter);
app.use("/course", courseRouter);
=======
app.use("/admin",adminRouter)
app.use(cors());


app.use("/admin", adminRouter);
app.use("/course", courseRouter);
app.use(cors());
>>>>>>> 6017b609cac0a75df906a5f681eb4dea4ed96b50

//app.use(checkAuthorization);
app.use("/users", userRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
