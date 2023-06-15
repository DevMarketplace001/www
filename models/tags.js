const db = require('../connection/database')
const {DataTypes, Model} =  require('sequelize')
class Tags extends Model{}
Tags.init({
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
    modelName: 'tags'
})
module.exports = Tags