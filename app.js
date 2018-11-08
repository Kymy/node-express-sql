var express = require('express');
const { User } = require('./sequelize')

var app = express();

app.post('/api/users', (req, res) => {
    console.log('req', req.body);
    User.create(req.body)
        .then(user => res.json(user))
})

app.get('/', (req, res, next) => {
    console.log('req', req);
    res.status(200).json({
        ok: true,
        msg: 'OK'
    });
});

app.listen(3000, () => {
    console.log('Express server port 3000:  \x1b[36m%s\x1b[0m', 'ONLINE');
});