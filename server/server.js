const express = require("express");
const cors = require("cors");
//const {authUser} = require("./utils/auth");
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const courseRouter = require('./routes/course');
const { authUser, checkAuthorization } = require("./utils/auth");
const app = express();

// middlewares
app.use(express.json());
app.use(authUser);
<<<<<<< HEAD

app.use("/admin",adminRouter)
app.use(cors());
=======
app.use("/admin", adminRouter);
app.use("/course", courseRouter);
app.use(cors());

>>>>>>> d4a2abd (Updated course routes, server config, and frontend pages)
//app.use(checkAuthorization);
app.use("/users", userRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
