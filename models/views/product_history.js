const db = require('../../connection/database')
const {DataTypes, Model} =  require('sequelize')
class ProductCart extends Model{}
ProductCart.init({
    historyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    sellerId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    resultPath:{
        type: DataTypes.STRING,
    }
},
{
    sequelize:db,
    tableName: 'product_history',
    timestamps:false,
    freezeTableName: true, // Опция для указания, что имя таблицы соответствует имени представления
    primaryKey: false // Опция для отключения использования атрибута id как первичного ключа
})
ProductCart.removeAttribute('id');
module.exports = ProductCart