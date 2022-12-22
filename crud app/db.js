const Sequelize = require('sequelize');
const db = new Sequelize('salonid', 'salonid', '11A5Z8aDJgJ4wSCSs1Q4MJ1whu', {
    host: "15.206.7.200",
    dialect: "mysql",
    port: 3310
});

db.authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch(err => {
        console.log('err' + err)
    });

db.sync({ force: false })
    .then(() => {
        console.log("yes re sync");
    })

module.exports = db;