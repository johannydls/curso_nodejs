const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//Primeira rota
app.get('/', (req, res) => {
    res.send({
        msg: "Hello Rocketseat",
        project: "API NodeJS",
        version: "1.0.0"
    })
})

app.listen(3001);