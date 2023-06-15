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
    },
    purchaseDate:{
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    sequelize:db,
    timestamps:false,
    modelName: 'history'
})
module.exports = Cart