const db = require('../connection/database')
const {DataTypes, Model} =  require('sequelize')
class Product extends Model{}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    sellerId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    categoryId:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    codePath:{
        type: DataTypes.STRING,
    },
    resultPath:{
        type: DataTypes.STRING,
    }
},
{
    sequelize:db,
    modelName: 'products'
})
module.exports = Product