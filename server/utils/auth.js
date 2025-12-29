const jwt = require("jsonwebtoken");

const config = require("./config");
const result = require("./result");
function authUser(req, res, next) {
    const path = req.url;

    // Only bypass LOGIN
    if (path === '/users/signin')
       {
        return next();
    }

    // const authHeader = req.headers.authorization;///  DOESNT REQUIRE AUTH HEADER 
    // if (!authHeader) {
    //     return res.send(result.createResult('Token is missing'));
    // }

    try {
        // const token = authHeader.startsWith("Bearer ") //// THIS IS AN OPTION USED FOR CCONST TOKEN
        //     ? authHeader.split(" ")[1]
        //     : authHeader;

        const token = req.headers.token;
        console.log(token);
        

        const payload = jwt.verify(token, config.SECRET);

        req.user = payload;              //  store user properly
        req.headers.role = payload.role; // optional
        next();
    } catch (err) {
        return res.send(result.createResult('Token is invalid'));
    }
}



function checkAuthorization(req, res, next) {
  const role = req.user.role;
  console.log("current user role: ", role);

  if (role === "ADMIN") {
    return next();
  }
  return res.send(result.createResult("UnAuthorized Access!"));
}

module.exports = { authUser, checkAuthorization };
