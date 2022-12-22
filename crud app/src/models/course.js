const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define('Course', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    coursename: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    fees: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
})