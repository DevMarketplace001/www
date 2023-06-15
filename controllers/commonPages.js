const models = require('../models')

exports.index = async function(req, res){
    let newest = await models.product.findAll({order:[["id","DESC"]], limit:4})
    let popular  = await models.views.popular.findAll({limit:4})
    res.render('pages/index',{user:req.session.user, newest, popular})
}
exports.about = async function(req, res){
    res.render('pages/about', {user:req.session.user})
}
exports.categories = async function(req, res){
    res.render('pages/categories')
}
exports.tags = async function(req, res){
    res.render('pages/tags')
}
exports.product = async function(req, res){
    let product = await models.product.findOne({where:{id:req.params.id}});
    if(req.session.user){
        req.session.productId = product.id;
    }
    let cat = await models.categories.findOne({where:{id:product.categoryId}});
    if(cat){
        product.cat = cat.title
    }
    
    let categories = await models.categories.findAll();
    let tags = await models.tags.findAll();
    let bought = false;
    let getCart = false;
    if(req.session.user != undefined){
        let history = await models.history.findOne({where:{productId:req.params.id, userId: req.session.user.id}});
        if(history){
            bought = true; 
        }
    }
    if(req.session.user != undefined){
        let cart = await models.cart.findOne({where:{productId:req.params.id, userId: req.session.user.id}});
        if(cart){
            getCart = true;
        }
    }
    res.render('pages/product',{user:req.session.user, product, categories, tags, bought, getCart})
}
exports.contacts = async function(req, res){
    res.render('pages/contact', {user:req.session.user})
}