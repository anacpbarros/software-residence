const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Produtos extends Model {}

Produtos.init({
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    description: {
        type: DataTypes.STRING
    },
    selected: {
        type: DataTypes.BOOLEAN
    },
    checked: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'produtos',
    timestamps: false,
});

module.exports = Produtos;