const express = require('express');
var path = require('path');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 3310;
const router = require('./src/routes/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyparser.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', router);



app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})