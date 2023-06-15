const db = require('../connection/database')
const {DataTypes, Model} =  require('sequelize')
class Cart extends Model{}
Cart.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize:db,
    modelName: 'carts'
})
module.exports = Cart