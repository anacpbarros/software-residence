const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Cliente = require('./Cliente');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

app.post('/clientes', async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.send(cliente);
});

app.listen(3001, () => {
    console.log("app is running")
});