/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  //login page get
  Login: function (req, res) {
    res.view("pages/login");
  },

  //user login
  loginCreate: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const users = await User.findOne({ email: email });
    if (!users) {
      //email not found
      req.addFlash("error", "Email id is not registered");
      return res.view("pages/login");
    } else {
      if (users) {
        const id = users.id;
        //generating token and bcrypt password
        if (await bcrypt.compare(password, users.password)) {
          const token = jwt.sign({ email: email, id: id }, "secret");
          const data = await User.update({ id: id }).set({ token: token });
          const cookies = res.cookie("token", token, {
            secure: true,
          });
          console.log(data);
          res.redirect("/account");
        } else {
          //validation for incorrect password
          req.addFlash("password", "Password is incorrect");

          return res.view("pages/login");
        }
        console.log("users", users);
      } else {
        req.addFlash("error", "Email id or Password is incorrect");
        return res.view("pages/login");
      }
    }
  },

  //logout
  userLogout: async (req, res) => {
    try {
      console.log("user:", req.userId);
      const id = req.userId;
      //updates token null
      const data = await User.update({ id: id }).set({
        token: null,
      });
      // clears cookie
      res.clearCookie("token");
      console.log("logout successful");
      res.redirect("/login");
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
