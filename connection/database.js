const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("marketplace","root","",{host: "localhost", dialect:"mysql"})
module.exports = sequelize 