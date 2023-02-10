/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

module.exports = {
  //signup page get route
  Usersign: function (req, res) {
    res.view("pages/signup");
  },

  //create user
  userCreate: async function (req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    const sign = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    }).exec(async function (err) {
      if (err) {
        req.addFlash("danger", "Email id is already registered");
        res.view("pages/signup");
      } else {
        const account = await User.findOne({ email: email });
        const useraccount = account.id;
        const acc = await Account.create({
          accountname: firstname,
          balance: 0,
          useracc: useraccount,
        });
        role = "Owner";
        const member = await Useracc.create({ user: useraccount, role: role });
        console.log(member);
        const mail = async () => {
          let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "f8ab2a3d2eda5e",
              pass: "a12daae11869d6",
            },
          });

          const sendmailnow = await transport.sendMail({
            from: "salonid@zignuts.com", // sender address
            to: req.body.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Welcome to our website!", // plain text body
            html: "<b>Welcome to our website!</b>", // html body
          });

          console.log("Message sent: %s", sendmailnow.messageId);

          console.log(
            "Preview URL: %s",
            nodemailer.getTestMessageUrl(sendmailnow)
          );
        };

        mail().catch((err) => console.log(err));

        res.redirect("/login");
      }
    });
  },
};
