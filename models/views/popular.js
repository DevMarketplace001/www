const db = require('../../connection/database')
const {DataTypes, Model} =  require('sequelize')
class Popular extends Model{}
Popular.init({
    productId: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    purchase_count:{
        type: DataTypes.BIGINT(21),
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
    sellerId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resultPath:{
        type: DataTypes.STRING,
    }
},
{
    sequelize:db,
    tableName: 'most_popular',
    timestamps:false,
    freezeTableName: true, // Опция для указания, что имя таблицы соответствует имени представления
    primaryKey: false // Опция для отключения использования атрибута id как первичного ключа
})
Popular.removeAttribute('id');
module.exports = Popular