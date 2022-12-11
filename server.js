const express = require('express');
const session = require('express-session');
const path = require('path');
const pug = require('pug');
const mysql = require('mysql');

const app = express();
var clickCount = 0;


app.set('view engine', 'pug');
app.set('views', './templates');
app.use(express.static(__dirname));
app.use(session({secret: '563b7q80bfyuizlhfdjsdzkhf892qb7gry8y8wae9fyv8934', saveUninitialized: false, resave: false}));
app.use(express.urlencoded());

const connectionPool = mysql.createPool({
    connectionLimit: 5,
    host     : 'cse-mysql-classes-01.cse.umn.edu',
    user     : 'C4131F22U14',
    password : '246',
    database : 'C4131F22U14'
});

app.listen(3006, () => {
    console.log('Server listening on port 3006');
});

app.get('/', (req, res) => {
    res.render('myAboutMe.pug', {
        loginStatus: req.session.isLoggedIn,
        username: req.session.username
    });
});

app.get('/myAboutMe.html', (req, res) => {
    res.render('myAboutMe.pug', {
        loginStatus: req.session.isLoggedIn,
        username: req.session.username
    });
});

app.get('/myContacts.html', (req, res) => {
    res.render('myContacts.pug', {
        loginStatus: req.session.isLoggedIn,
        username: req.session.username
    });
});

app.get('/myWidgets.html', (req, res) => {
    res.render('myWidgets.pug', {
        loginStatus: req.session.isLoggedIn,
        username: req.session.username
    });
});

app.get('/contactMe.html', (req, res) => {
    res.render('contactMe.pug', {
        loginStatus: req.session.isLoggedIn,
        username: req.session.username,
        queryError: ''
    });
});

app.post('/contactMe', (req, res) => {
    var error = '';
    connectionPool.query(`insert into messages (messageTitle, messagerEmail, messagerUsername, messageLink, messageCategory, messageText) values ("${req.body.postTitle}", "${req.body.email}", "${req.body.username}", "${req.body.link}", "${req.body.category}", "${req.body.message}")`,
    (err, data) => {
        if(err) {
            error = err.sqlMessage;
        }
        res.render('contactMe.pug', {
            loginStatus: req.session.isLoggedIn,
            username: req.session.username,
            queryError: error
        });
    })
});

app.get('/login', (req, res) => {
    if(req.session.isLoggedIn) {
        res.locals.loggedOn = true;
        res.render('login.pug', {
            loggedInMsg: 'Welcome ' + req.session.username + '!',
            loginStatus: req.session.isLoggedIn,
            username: req.session.username
        })
    }
    else {
        res.render('login.pug');
    }
});

app.post('/login', (req, res) => {
    req.session.isLoggedIn = true;
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    res.redirect('/myAboutMe.html');
});

app.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    res.render('logout.pug', {
        loginStatus: req.session.isLoggedIn,
        username: req.session.username
    });
});

app.post('/api/click', (req, res) => {
    clickCount++;
    res.redirect('/myWidgets.html');
});

app.get('/api/click', (req, res) => {
    res.json({clickCount: clickCount});
});

app.get('/contactLog', (req, res) => {
    let queryStr = 'select * from messages';
    if(['Question', 'Comment', 'Concern'].includes(req.query.filter)) {
        queryStr = queryStr + ` where messageCategory = "${req.query.filter}"`;
    }
    connectionPool.query(queryStr,(err, data) => {
        if(err) {
            console.error(err);
        };
        if(data.length == 0) {
            res.render('contactLog.pug', {
                loginStatus: req.session.isLoggedIn,
                username: req.session.username,
                contactMessages: false,
                noResult: true
            });
        }
        else {
            res.render('contactLog.pug', {
                loginStatus: req.session.isLoggedIn,
                username: req.session.username,
                contactMessages: data,
                noResult: false
            });
        }
})
});


