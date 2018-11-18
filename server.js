const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Permitir que seja enviado dados para a aplicação no formato JSON
app.use(express.json());

//Permitir que a API seja acessada publicamente por qualquer domínio
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

//Rotas com prefixo /api/
app.use('/api', require('./src/routes'));

app.listen(3001);