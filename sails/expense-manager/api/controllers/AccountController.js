/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require("jsonwebtoken");

module.exports = {
  //account page get
  Account: async function (req, res) {
    const token = req.cookies.token;
    const account = await User.findOne({ token: token });
    const useracc = account.id;
    Account.find({ useracc: useracc }).exec((err, account) => {
      if (err) {
        res.status(400).send({ err: "database error" });
      } else {
        res.view("account/add", { account: account });
      }
    });
  },

  //create account
  accountAdd: async function (req, res) {
    const token = req.cookies.token;
    const account = await User.findOne({ token: token });
    const useracc = account.id;
    const useraccname = account.accountname;

    const accountname = req.body.accountname;
    const accname = await Account.find({
      useracc: useracc,
      accountname: accountname,
    });
    if (accname.length != 0) {
      //if account already exists
      req.addFlash("error", "Account already exists");
      res.redirect("/account");
    } else {
      const acc = await Account.create({
        accountname: accountname,
        useracc: useracc,
      }).exec(function (err, acc) {
        if (err) {
          req.addFlash("error", "Account name is  available");
          res.redirect("/account");
        } else {
          req.addFlash("success", "Account added successfully");
          res.redirect("/account");
        }
      });
    }
  },

  //edit account
  accountEdit: function (req, res) {
    Account.findOne({ id: req.params.id }).exec(function (err, account) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }

      res.view("account/edit", { account: account });
    });
  },

  //update account
  accountUpdate: function (req, res) {
    const accountname = req.body.accountname;

    console.log(req.body);
    Account.update({ id: req.params.id }, { accountname: accountname }).exec(
      function (err) {
        if (err) {
          res.send(500, { error: "Database Error" });
        }
        req.addFlash("success", "Account updated successfully");
        res.redirect("/account");
      }
    );
    return false;
  },

  //delete account
  accountDelete: function (req, res) {
    Account.destroy({ id: req.params.id }).exec(function (err) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }
      req.addFlash("error", "Account deleted successfully");
      res.redirect("/account");
    });
    return false;
  },
};
