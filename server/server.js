const express = require("express");

const userRouter = require("./routes/users");
const { authUser, checkAuthorization } = require("./utils/auth");
const app = express();

// middlewares
app.use(express.json());
app.use(authUser);
app.use(cors());
router.get(
  "/enrolled-students",
  auth,
  isAdmin,
  controller.getEnrolledStudents
);

// app.use(checkAuthorization);
app.use("/users", userRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
