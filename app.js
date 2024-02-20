const express = require('express');
const path = require('path');
const port = 3030;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const mainRoutes = require('./routes/main.routes');


app.use('/', mainRoutes);

app.listen(port, () => (console.log("Servidor corriendo")));