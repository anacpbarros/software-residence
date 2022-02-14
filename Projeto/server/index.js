const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Cliente = require('./Cliente');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

app.post('/usuario', async (req, res) => {
    await Cliente.create(req.body);
    res.send('Usuário cadastrado com sucesso!');
});

