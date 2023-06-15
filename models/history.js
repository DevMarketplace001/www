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
        allowNull: false,
        references:{
            model: "users",
            key:"id"
        }
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "products",
            key:"id"
        }
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