const db = require('../connection/database')
const {DataTypes, Model} =  require('sequelize')
class Categories extends Model{}
Categories.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize:db,
    modelName: 'categories'
})
module.exports = Categories