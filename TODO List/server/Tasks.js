const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Tasks extends Model {}

Tasks.init({
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    completed: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'tasks',
    timestamps: false,
});

module.exports = Tasks;