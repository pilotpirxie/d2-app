const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeConnection');

const Item = sequelize.define('d2_items', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: Sequelize.TEXT,
    active: Sequelize.BOOLEAN,
    path_url: Sequelize.TEXT,
    brand_name: Sequelize.TEXT,
    item_name: Sequelize.TEXT,
    create_date: Sequelize.DATE,
    item_image: Sequelize.TEXT
}, {
    timestamps: false,
    underscored: true
});

module.exports = Item;