const jwt = require("jsonwebtoken");
const config = require("./config");
const result = require("./result");

function authUser(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.send(result.createResult("Token missing"));
    }

    const payload = jwt.verify(token, config.SECRET);
    req.user = payload; // 🔥 REQUIRED
    next();
  } catch {
    return res.send(result.createResult("Invalid token"));
  }
}

function checkAuthorization(req, res, next) {
  if (req.user.role === "ADMIN") {
    return next();
  }
  return res.send(result.createResult("Unauthorized"));
}

module.exports = { authUser, checkAuthorization };