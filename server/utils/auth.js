const jwt = require("jsonwebtoken");

const config = require("./config");
const result = require("./result");
function authUser(req, res, next) {
    const path = req.url;

    if (path === '/users/signin' || path === '/users/signup', path=='/admin/enrolled-students') {
        return next();
    }

    const token = req.headers.token;
    if (!token) {
        return res.send(result.createResult('Token is missing'));
    }

    try {
        const payload = jwt.verify(token, config.SECRET);

        // ✅ SET FROM TOKEN (not client)
        req.headers.uid = payload.uid;
        req.headers.email = payload.email;
        req.headers.role = payload.role;

        console.log("current user role:", payload.role);

        next();
    } catch (err) {
        res.send(result.createResult('Token is invalid'));
    }
}

function checkAuthorization(req, res, next) {
  const role = req.headers.role;
  console.log("current user role: ", role);

  if (role === "ADMIN") {
    return next();
  }
  return res.send(result.createResult("UnAuthorized Access!"));
}

module.exports = { authUser, checkAuthorization };
