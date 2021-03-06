const Sequelize = require('sequelize')

const connection = new Sequelize('nodepress', 'root', 'asd123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection