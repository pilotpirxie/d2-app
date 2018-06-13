const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeConnection');

const Item = sequelize.define('d2_items', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    },
    path_url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    brand_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    item_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    create_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    item_image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true
});

module.exports = Item;