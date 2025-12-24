const express = require("express");

const userRouter = require("./routes/users");
// const courseRoutes = require('./routes/course');
// app.use('/course', courseRoutes);
const { authUser, checkAuthorization } = require("./utils/auth");
const app = express();

// middlewares
app.use(express.json());
app.use(authUser);


//app.use(checkAuthorization);
app.use("/users", userRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
