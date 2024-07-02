const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome to our restaurant!')
})

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000')
})