const mongoose = require('mongoose');
const { token } = require('morgan');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,

    },

    password: {
        type: String,
        required: true,

    },
    token: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('User', userSchema);