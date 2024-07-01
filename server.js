const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome to our restaurant!')
})

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})