const jwt = require("jsonwebtoken");
const config = require("./config");
const result = require("./result");

function authUser(req, res, next) {
  const path = req.url;

  // Public routes
  if (path === "/users/signin" || path === "/students/register-to-course") {
    return next();
  }

  try {
    const token = req.headers.token; // 🔥 backend expects token here

    if (!token) {
      return res.send(result.createResult("Token is missing"));
    }

    const payload = jwt.verify(token, config.SECRET);
    req.user = payload;
    req.headers.role = payload.role;
    next();
  } catch (err) {
    return res.send(result.createResult("Token is invalid"));
  }
}

function checkAuthorization(req, res, next) {
  const role = req.user?.role;
  console.log("Current role:", role);

  if (role === "ADMIN") {
    return next();
  }

  return res.send(result.createResult("Unauthorized Access!"));
}

module.exports = { authUser, checkAuthorization };
