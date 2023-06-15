const models = require('../models');
var fs = require('fs');

exports.login = async function(req, res){
   let user = await models.user.findOne({where:{username:req.body.user}})
   if(user != null){
      let password = models.bcrypt.hashSync(req.body.password, user.salt);
      if(password == user.password){
         delete user.dataValues.password
         delete user.dataValues.createdAt
         delete user.dataValues.updatedAt
         req.session.user = user.dataValues
         res.send({status:1})
      }else{
         res.send({text:"incorrect password"})
      }
   }else{
      let user = await models.user.findOne({where:{email:req.body.user}})
      if(user != null){
         let password = models.bcrypt.hashSync(req.body.password, user.salt);
         if(password == user.password){
            res.send({status:1})
         }else{
            res.send({text:"incorrect password"})
         }
      }else{
         res.send({text:"Error, not correct username or email"})
      }
   }
}
exports.registration = async function(req, res){
   if(models.validator.isAlphanumeric(req.body.user) && models.validator.isAlphanumeric(req.body.password) && models.validator.isEmail(req.body.email)){
      let email = await models.user.findOne({where:{email:req.body.email}})
      let user = await models.user.findOne({where:{username:req.body.user}})
      if(!email && !user){
         let salt = await models.bcrypt.genSalt(10);
         let password = await models.bcrypt.hash(req.body.password, salt);
         let user = await models.user.create({username: req.body.user.toLowerCase(), email: req.body.email, password, salt })
         delete user.dataValues.password
         delete user.dataValues.createdAt
         delete user.dataValues.updatedAt
         req.session.user = user.dataValues
         const directoryPath = `./public/users/${req.session.user.id}/avatar`;
         fs.mkdirSync(directoryPath, { recursive: true });
         res.send({status: 1})
      }else{
         res.send({text:"User or email already registered"})
      }
   }else{
      res.send({text:"Error, incorrect symbol('.','*'...)"})
   }
}