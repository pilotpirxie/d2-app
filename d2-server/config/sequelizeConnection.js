const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize({
    database: 'd2_db',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres',
    operatorsAliases: Op
});

module.exports = sequelize;