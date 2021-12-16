const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
})

app.get('/user', (req, res) => {
    res.send('1 + 1 = 2');
})

app.use(express.static('db'))

app.listen(3000, () => {
    console.log('server on port 3000');
})