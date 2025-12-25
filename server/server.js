const express = require("express");
const cors = require("cors");
//const {authUser} = require("./utils/auth");
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

// const courseRoutes = require('./routes/course');
// app.use('/course', courseRoutes);
const { authUser, checkAuthorization } = require("./utils/auth");
const app = express();

// middlewares
app.use(express.json());
app.use(authUser);
<<<<<<< HEAD
app.use("/admin",adminRouter)

=======
app.use(cors());
>>>>>>> 4cb24203d755dd5e5883e6f088b4f0acd3504c27

//app.use(checkAuthorization);
app.use("/users", userRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
