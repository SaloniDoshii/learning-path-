const User = require('../models/User');
const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");

// login route for static admin
exports.user_get_all = async (req, res) => {
    console.log(req.query);

    const user = await User.find().exec();
    console.log("user", user);

    let token;
    if (user) {
        if (user[0].email === req.query.email && user[0].password === req.query.password) {
            token = jwt.sign(
                {
                    email: user[0].email,
                    password: user[0].password
                },
                "secret",

            );
            console.log(token);

            const data = await User.updateOne({ _id: user[0]._id },
                { $set: { token: token } }
            );

            console.log("data", data);

            res.redirect('/admin')
        } else {
            req.session.message = {
                type: 'failure',
                message: 'Login failed!',
            };

            res.render('Login')
        }
    }

}

//Logout route for static admin
exports.user_logout_all = async (req, res) => {
    const user = await User.find().exec();
    console.log("user", user);
    const data = await User.findByIdAndUpdate({ _id: user[0]._id },
        {
            $set: { token: null }
        })
    console.log("data", data);

    res.render('Login');
}





