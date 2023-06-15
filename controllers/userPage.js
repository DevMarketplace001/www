const models = require('../models')
const Chart = require('chart');

exports.profile = async function(req, res){
    res.render('pages/profile',{user:req.session.user})
}
exports.managerCat = async function(req, res){
    let categories = await models.categories.findAll();
    res.render('pages/managerCat',{user:req.session.user, categories})
}
exports.managerTag = async function(req, res){
    let tags = await models.tags.findAll();
    res.render('pages/managerTag',{user:req.session.user, tags})
}
exports.addProduct = async function(req, res){
    let categories = await models.categories.findAll();
    let tags = await models.tags.findAll();
    res.render('pages/addProduct',{user:req.session.user, categories, tags})
}
exports.products = async function(req, res){
    let products = await models.product.findAll({where:{sellerId:req.session.user.id}});
    res.render('pages/products',{user:req.session.user, products})
}
exports.cart = async function(req, res){
    let cart = await models.views.product_cart.findAll({where:{userId:req.session.user.id}})
    res.render('pages/cart',{user:req.session.user, cart})
}
exports.history = async function(req, res){
    let history = await models.views.product_history.findAll({where:{userId:req.session.user.id}})
    res.render('pages/history',{user:req.session.user, history})
}
exports.cabinet = async function(req, res){
    
    res.render('pages/cabinet',{user:req.session.user})
}