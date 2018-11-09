var express = require('express');

var app = express();

app.get('/', (req, res, next) => {
    console.log('req', req);
    res.status(200).json({
        ok: true,
        msg: 'OK'
    });
});

module.exports = app;