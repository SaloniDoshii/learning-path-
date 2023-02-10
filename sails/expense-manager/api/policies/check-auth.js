const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
module.exports = async (req, res, next) => {
  const token = req.cookies.token;
  console.log("token:", token);
  if (!token) {
    return res.redirect("/login");
  }
  try {
    const data = jwt.verify(token, "secret");
    req.userId = data.id;
    req.useremail = data.email;
    req.token = token;
    req.user = data;
    console.log("userId:", req.userId);
    return next();
  } catch (error) {
    return res.redirect("/login");
  }
};
