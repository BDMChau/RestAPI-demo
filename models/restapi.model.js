const sequelize = require('sequelize');
const db = require('../database/database');

const restAPI = db.define('rest', /*Schema*/{
    name: {
        type: sequelize.STRING,
        required: true
    },
    description: {
        type: sequelize.TEXT,
        required: true
    }
});

db.sync();

module.exports = restAPI;