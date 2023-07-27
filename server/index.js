// Include express framework
const express = require('express');

// Create express app
const app = express();

// Create route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.get('/about', (req, res) => {
    res.send('<h1>Hello from About page</h1>')
});
app.get('/contact', (req, res) => {
    res.send('<h1>Hello from Contact page</h1>')
});
app.get('*', (req, res) => {
    res.send('<h1>Page 404 not found</h1>')
});

// listen on port 3000

app.listen(3000);