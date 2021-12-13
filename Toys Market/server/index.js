const express = require("express");
const sequelize = require('./database');
const cors = require('cors')
const Produtos = require('./Produtos')

sequelize.sync({ force: true}).then(() => console.log('db criado'));
const app = express();

app.use(cors());

app.use(express.json());

app.get('/produtos', async (req, res) => {
    const produtos = await Produtos.findAll();
    res.send(produtos);
});

app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const produto = await Produtos.findOne({where: {id}});
    res.send(produto);
});

app.post('/produtos', async (req, res) => {
    const produto = await Produtos.create(req.body);
    res.send(produto);
});

app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const produto = await Produtos.findOne({where: {id}});
    produto.title = req.body.title;
    produto.description = req.body.description;
    produto.completed = req.body.completed;
    await produto.save();
    res.send(produto);
});

app.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    await Produtos.destroy({ where: { id }});
    res.send('Tarefa apagada com sucesso!');
});

app.listen(3001, () => {
    console.log("app is running")
});