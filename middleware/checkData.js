const models = require('../models')
const fs = require('fs');
const path = require('path');
exports.aside = async function(req, res, next){
    let aside = [];
    if(req.session.aside === undefined){
        
    }
}
exports.user = async function(req, res, next){
    if(req.session.user == undefined){
        return res.redirect("/")
    } 
    next();
}
exports.checkUserData = async function(req, res, next){
    if(req.session.user != undefined){
        
        let user = await models.user.findOne({where:{id:req.session.user.id, salt: req.session.user.salt}})
        delete user.dataValues.password;
        delete user.dataValues.createdAt;
        delete user.dataValues.updatedAt;
        req.session.user = user.dataValues;

    } 
    next();
}
exports.checkAvatarDirectory = async function(req, res, next){
    let user = req.session.user;
    const directoryPath = path.join(__dirname, `../public/users/${user.id}/avatar`);

    fs.access(directoryPath, fs.constants.F_OK, (err) => {
        console.log(directoryPath)
        if (err) {
        // Директория не существует, создаем ее
        fs.mkdirSync(directoryPath, {recursive: true});
        }
        next();
    });
}