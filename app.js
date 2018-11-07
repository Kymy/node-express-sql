var express = require('express');
var mysql = require('mysql');

var db_connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'kim',
    password : 'kimkim',
    database : 'users'
});

db_connection.connect( (err, res) =>{
    if (err) throw err;
    console.log('DB connection:  \x1b[36m%s\x1b[0m', 'ON');
});

var app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        msg: 'OK'
    });
});

app.listen(3000, () => {
    console.log('Express server port 3000:  \x1b[36m%s\x1b[0m', 'ONLINE');
});