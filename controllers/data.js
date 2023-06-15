const models = require('../models')

exports.username = async function(req, res){
    let username = await models.user.findOne({where: req.body})
    if (!username){
        res.send({status:1})
    }else{
        res.send({status:0})
    }
}
exports.email = async function(req, res){
    let email = await models.user.findOne({where: req.body})
    if (!email){
        res.send({status:1})
    }else{
        res.send({status:0})
    }
}