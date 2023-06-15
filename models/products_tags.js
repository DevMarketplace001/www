const db = require('../connection/database')
const {DataTypes, Model} =  require('sequelize')
class ProductTags extends Model{}
ProductTags.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tagId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize:db,
    timestamps:false,
    modelName: 'product_tags'
})
module.exports = ProductTags