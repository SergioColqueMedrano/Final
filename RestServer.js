require('dotenv').config();

const express = require('express');
const restserver = express();

restserver.get('/', function (req, res) {
    res.send('Hello World!');
})

restserver.listen(process.env.PORT, function () {
    console.log('Servidor corriendo en puerto', process.env.PORT);
});