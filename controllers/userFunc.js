const models = require('../models')
const fs_extra = require('fs-extra');

exports.logout = async function(req, res){
    delete req.session.user
    res.redirect("/")
}
exports.createCat = async function(req, res){
    if(models.validator.isAlphanumeric(req.body.title.replace(/\s/g, ''))){
        await models.categories.create({title: req.body.title.toLowerCase()})
        res.send({status: 1})
    }else{
        res.send({text: "Incorrect value for category"})
    }
}
exports.createTag = async function(req, res){
    if(models.validator.isAlphanumeric(req.body.title.replace(/\s/g, ''))){
        await models.tags.create({title: req.body.title.toLowerCase()})
        res.send({status: 1})
    }else{
        res.send({text: "Incorrect value for tag"})
    }
}
exports.deleteCat = async function(req, res){
    if(models.validator.isAlphanumeric(req.body.id.replace(/\s/g, ''))){
        await models.categories.destroy({where:{id: req.body.id.toLowerCase()}})
        res.send({status: 1})
    }
}
exports.deleteTag = async function(req, res){
    if(models.validator.isAlphanumeric(req.body.id.replace(/\s/g, ''))){
        await models.tags.destroy({where:{id: req.body.id.toLowerCase()}})
        res.send({status: 1})
    }
}
exports.updateAvatar = async function(req, res){
    res.send({status: 1});
}
exports.updateProfile = async function(req, res){
    try {
        let findUser = await models.user.findOne({where: {username: req.body.username}});
        let findEmail = await models.user.findOne({where: {email: req.body.email}});
        if(findUser){
            delete req.body.username
        }
        if(findEmail){
            delete req.body.email
        }
        let user = await models.user.findOne({where:{id: req.session.user.id, salt: req.session.user.salt}});
        let password = await models.bcrypt.hash(req.body.password, req.session.user.salt);
        req.body.password = password;
        user.update(req.body);
        res.send({status: 1});
    } catch (error) {
        res.send({text: "Error updating profile"});
    }
}
exports.checkProduct = async function(req, res){
    let data = {
        title: req.body.title,
        sellerId:req.session.user.id,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.category
    }
    let product = await models.product.create(data)
    let tag = await models.tags.findOne({where:{id:req.body.tag}})
    if(tag){
        await models.products_tags.create({productId: product.id, tagId:tag.id})
    }
    req.session.productId = product.id;
    res.send({status: 1});
}
exports.updateProduct = async function(req, res){
    let data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.category
    }
    let product = await models.product.findOne({where:{id:req.session.productId}})
    let tags = await models.products_tags.findAll({where:{productId:req.session.productId}})
    product.update(data);
    for(let tag of tags){
        if(tag){
            tag.destroy();
        }
    }
    let tag = await models.tags.findOne({where:{id:req.body.tag}})
    if(tag){
        await models.products_tags.create({productId: product.id, tagId:tag.id})
    }
    req.session.productId = product.id;
    res.send({status: 1});
}
exports.uploadCode = async function(req, res){
    res.send({status: 1});
}
exports.uploadResult = async function(req, res){
    res.send({status: 1});
}
exports.productDelete = async function(req, res){
    try {
        let product = await models.product.findOne({where:req.body});
        let tags = await models.products_tags.findAll({where:{productId:req.body.id}});
        for(let tag of tags){
            await tag.destroy();
        }
        fs_extra.removeSync(`../public/users/${product.sellerId}/product${product.id}`);
        product.destroy()
    } catch (err) {
        console.error('Ошибка при удалении папки:', err);
    }
    
    res.send({status: 1});
}
exports.insertCart = async function(req, res){
    try {
        await models.cart.create({userId:req.session.user.id, productId:req.body.productId})
        res.send({status: 1});
    } catch (err) {
        console.error('Error:', err);
    }
}
exports.insertHistory = async function(req, res){
    console.log(req.body)
    try {
        
        for(let i of req.body.id){
            if(i != ""){
                let cart = await models.cart.findOne({where:{productId:i, userId:req.session.user.id}})
                if(cart){
                    cart.destroy()
                }
                
                let history = await models.history.create({productId:i, userId:req.session.user.id, purchaseDate: new Date()})
            }
        }
        res.send({status: 1});
    } catch (err) {
        console.error('Error:', err);
    }
}
exports.cartDelete = async function(req, res){
    try {
        let cart = await models.cart.findOne({where:req.body})
        cart.destroy()
    } catch (err) {
        console.error('Ошибка при удалении папки:', err);
    }
    
    res.send({status: 1});
}
exports.gifChart = async function(req, res){
    try {
        let popular = await models.views.popular.findAll({where:{sellerId:req.session.user.id}, limit:10})
        const labels = [];
        const data = [];
        const datasetLabel = 'Most popular products';
        for(let i of popular){
            labels.push(i.title)
            data.push(i.purchase_count)
        }
        res.send({labels, data, datasetLabel});
    } catch (err) {
        console.error('Ошибка при удалении папки:', err);
    }
}