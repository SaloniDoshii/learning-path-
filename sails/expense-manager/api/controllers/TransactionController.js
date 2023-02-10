/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //transaction page get
  Trans: async function (req, res) {
    try {
      const account = await Account.findOne({ id: req.params.id });

      const defmember = account.useracc;
      const owner = await User.findOne({ id: req.userId });

      const member = await Useracc.find({ account: req.params.id }).populate(
        "user"
      );

      const trans = await Transaction.find({ account: req.params.id })
        .sort([{ date: "DESC" }])
        .exec((err, transaction) => {
          if (err) {
            res.status(400).json({ err: "db error" });
          } else {
            res.view("transaction/trans", {
              transaction: transaction,
              member: member,
              owner: owner,
              account: account,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  },

  //add transaction page get
  transAdd: async function (req, res) {
    const accounts = await Account.findOne({ id: req.params.id });
    const user = await Transaction.find({});
    const defmember = accounts.useracc;
    const owner = await User.findOne({ id: req.userId });
    const member = await Useracc.find({ account: req.params.id }).populate(
      "user"
    );
    res.view("transaction/add", {
      user: user,
      accounts: accounts,
      owner: owner,
      member: member,
    });
  },

  //add transaction
  newtrans: async (req, res) => {
    let { amount, description, date, select, created } = req.body;
    console.log(req.body);
    const account = await Account.findOne({ id: req.params.id });
    balance = account.balance;
    // Update the balance
    if (req.body.select === "income") {
      const newbalance = balance + parseFloat(amount);
      const transaction = await Transaction.create({
        amount: amount,
        description: description,
        date: date,
        select: select,
        balance: newbalance,
        account: account.id,
        created: created,
      }).exec((err) => {
        if (err) {
          console.log(err);
          res.status(400).json({ err: "db error" });
        } else {
          req.addFlash("success", "Transaction added successfully");
          res.redirect("/transaction/" + account.id);
        }
      });
      const id = req.params.id;
      const accbal = await Account.update(id, { balance: newbalance });
      console.log(accbal);
      console.log(transaction);
    } else {
      const expbalance = balance - parseFloat(amount);
      if (expbalance >= 0) {
        //if balance = 0 and expense is added then it would be not able to add
        newbalance = expbalance;
        await Transaction.create({
          amount: amount,
          description: description,
          date: date,
          select: select,
          balance: newbalance,
          account: account.id,
          created: created,
        }).exec((err) => {
          if (err) {
            console.log(err);
            res.status(400).json({ err: "db error" });
          } else {
            req.addFlash("success", "Transaction added successfully");
            res.redirect("/transaction/" + account.id);
          }
        });
        const id = req.params.id;
        const accbal = await Account.update(id, { balance: newbalance });
        console.log(accbal);
      } else {
        req.addFlash("error", "Expense is greater than balance ");
        res.redirect("/transaction/" + account.id);
      }
    }
  },

  //edit transaction page
  transEdit: async function (req, res) {
    const user = await Transaction.find({});
    const transid = await Transaction.findOne({ id: req.params.id });
    const accid = transid.account;
    const tokens = req.cookies.token;
    const owner = await User.findOne({ token: tokens });
    await Transaction.findOne({ id: req.params.id }).exec(function (
      err,
      transaction
    ) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }
      res.view("transaction/edit", {
        transaction: transaction,
        user: user,
        owner: owner,
      });
    });
  },

  //update transaction
  transUpdate: async function (req, res) {
    const id = req.params.id;
    const date = req.body.date;
    const description = req.body.description;
    const amount = req.body.amount;
    const select = req.body.select;
    const created = req.body.created;
    console.log(req.body);
    const account = await Transaction.findOne({ id: req.params.id });
    const balaccount = await Account.findOne({ id: account.account });
    const updatedbalance = balaccount.balance;
    const oldamount = account.amount;
    const newamount = oldamount - amount;
    console.log(newamount);

    //  Update the balance
    if (req.body.select === "income") {
      incbalance = updatedbalance - newamount;
      if (incbalance >= 0) {
        //if low balance then income is not able to update
        newbalance = incbalance;
        await Transaction.update(id, {
          date: date,
          description: description,
          amount: amount,
          select: select,
          balance: newbalance,
          created: created,
        }).exec(async function (err) {
          if (err) {
            res.send(500, { error: "Database Error" });
          } else {
            const trans = await Transaction.findOne({ id: req.params.id });
            const accbal = await Account.update(trans.account, {
              balance: newbalance,
            });
            req.addFlash("success", "Transaction updated successfully");
            res.redirect("/transaction/" + trans.account);
            console.log(accbal);
          }
        });
      } else {
        req.addFlash(
          "error",
          "Transaction not update please check balance then update."
        );
        res.redirect("/transaction/" + account.account);
      }
    } else {
      expbalance = updatedbalance + newamount;

      if (expbalance >= 0) {
        //if low balance then expense is not able to update
        newbalance = expbalance;
        await Transaction.update(id, {
          date: date,
          description: description,
          amount: amount,
          select: select,
          balance: newbalance,
          created: created,
        }).exec(async function (err) {
          if (err) {
            res.send(500, { error: "Database Error" });
          } else {
            const trans = await Transaction.findOne({ id: req.params.id });
            const accbal = await Account.update(trans.account, {
              balance: newbalance,
            });
            req.addFlash("success", "Transaction updated successfully");
            res.redirect("/transaction/" + trans.account);
            console.log(accbal);
          }
        });
      } else {
        req.addFlash(
          "error",
          "Transaction not update please check your balance then update"
        );
        res.redirect("/transaction/" + account.account);
      }
    }
  },

  //delete transaction
  transDelete: async function (req, res) {
    const trans = await Transaction.findOne({ id: req.params.id });
    const balaccount = await Account.findOne({ id: trans.account });
    const updatedbalance = balaccount.balance;
    // Update the balance
    if (trans.select === "expense") {
      newbalance = updatedbalance + trans.amount;
      await Transaction.destroy({ id: req.params.id }).exec(async function (
        err
      ) {
        if (err) {
          res.send(500, { error: "Database Error" });
        }
        await Account.update(trans.account, { balance: newbalance });
        req.addFlash("success", "Transaction deleted successfully");
        res.redirect("/transaction/" + trans.account);
      });
    } else {
      balance = updatedbalance - trans.amount;
      if (balance >= 0) {
        //if low balance then income is not able to delete
        newbalance = balance;
        await Transaction.destroy({ id: req.params.id }).exec(async function (
          err
        ) {
          if (err) {
            res.send(500, { error: "Database Error" });
          }
          await Account.update(trans.account, { balance: balance });
          req.addFlash("success", "Transaction deleted successfully");
          res.redirect("/transaction/" + trans.account);
        });
      } else {
        req.addFlash(
          "error",
          "Transaction not deleted please check your balance"
        );
        res.redirect("/transaction/" + trans.account);
      }
    }
  },
};
