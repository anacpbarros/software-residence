const express = require("express");
const sequelize = require('./database');
const cors = require('cors')
const Tasks = require('./Tasks')

sequelize.sync({ force: true}).then(() => console.log('db criado'));
const app = express();

app.use(cors());

app.use(express.json());

app.get('/produtos', async (req, res) => {
    const tasks = await Tasks.findAll();
    res.send(tasks);
});

app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Tasks.findOne({where: {id}});
    res.send(task);
});

app.post('/produtos', async (req, res) => {
    const task = await Tasks.create(req.body);
    res.send(task);
});

app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Tasks.findOne({where: {id}});
    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed;
    await task.save();
    res.send(task);
});

app.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    await Tasks.destroy({ where: { id }});
    res.send('Tarefa apagada com sucesso!');
});

app.listen(3001, () => {
    console.log("app is running")
});