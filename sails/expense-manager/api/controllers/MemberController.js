/**
 * MemberController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //add member
  addMember: async function (req, res) {
    const token = req.cookies.token;
    const user = await User.findOne({ email: req.body.email });
    const account = await Account.findOne({ id: req.params.id });
    const membername = await Useracc.find({ account: account.id });

    if (!user) {
      //email is not found
      req.addFlash("errors", "Email id does not exists");
      return res.redirect("/transaction/" + account.id);
    }
    if (!membername) {
      //member email is not registered
      req.addFlash("errors", "Email id is not registered");
      return res.redirect("/transaction/" + account.id);
    }
    if (user.token === token) {
      //owner will not be able to add again
      req.addFlash("errors", "Owner  already exists");
      res.redirect("/transaction/" + account.id);
    }

    const memname = await Useracc.find({ user: user.id, account: account.id });
    if (memname.length != 0) {
      //member already exists
      req.addFlash("errors", "Member already exists");
      res.redirect("/transaction/" + account.id);
    } else {
      const role = "Member";
      await Useracc.create({
        user: user.id,
        account: account.id,
        role: role,
      }).exec(function (err) {
        if (err) {
          req.addFlash("errors", "Invaild email exists");
          res.redirect("/transaction/" + account.id);
        } else {
          req.addFlash("solved", "Member added successfully");
          res.redirect("/transaction/" + account.id);
        }
      });
    }
  },

  //delete member
  memberDelete: async function (req, res) {
    const trans = await Useracc.findOne({ id: req.params.id });
    await Useracc.destroy({ id: req.params.id }).exec(function (err) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }
      req.addFlash("errors", "Member deleted successfully");
      res.redirect("/transaction/" + trans.account);
    });
    return false;
  },
};
