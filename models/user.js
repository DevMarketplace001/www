const db = require('../connection/database')
const {DataTypes, Model} =  require('sequelize')
class User extends Model{}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    salt:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    img:{
        type: DataTypes.TEXT
    }
},
{
    sequelize:db,
    modelName: 'users'
})
module.exports = User