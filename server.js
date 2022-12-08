const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
app.set('view engine', 'pug');
app.set('views', './templates')

app.listen(3307, () => {
    console.log('Server listening on port 3307');
  });

app.get('/', (req, res) => {
    res.render('myAboutMe.pug', { title: 'My Express App' });
});

app.get('/myAboutMe.html', (req, res) => {
    res.render('myAboutMe.pug', { title: 'My Express App' });
});

app.get('/myContacts.html', (req, res) => {
    res.render('myContacts.pug', { title: 'My Express App' });
});

app.get('/myWidgets.html', (req, res) => {
    res.render('myWidgets.pug', { title: 'My Express App' });
});

app.get('/contactMe.html', (req, res) => {
    res.render('contactMe.pug', { title: 'My Express App' });
});

app.use(express.static(__dirname));