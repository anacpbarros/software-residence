const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Cliente extends Model{}

Cliente.init({
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'cliente'
})

module.exports = Cliente;