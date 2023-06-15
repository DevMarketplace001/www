var fs = require('fs');
const util = require('util');
const mkdir = util.promisify(fs.mkdir);
const access = util.promisify(fs.access);
var fs_extra = require('fs-extra');
var multer = require("multer");
const path = require('path');
var models = require('../models');
const user_storage = multer.diskStorage({
    destination: async(req, file, cb) => {
        let user = await models.user.findOne({where:{id:req.session.user.id, salt: req.session.user.salt}});
        const { originalname } = file
        const directoryPath = path.join(__dirname, `../public/users/${req.session.user.id}/avatar`)
        try {
          fs.accessSync(directoryPath);
        } catch (err) {
          if (err.code === 'ENOENT') {
            // Папка не существует, создаем ее
            fs.mkdirSync(directoryPath, { recursive: true });
          } else {
            throw err;
          }
        }
        fs_extra.emptyDirSync(directoryPath)
        cb(null, directoryPath)
        user.update({img:originalname}) 
    },
    filename: (req, file, cb) => {
        // Возьмем оригинальное название файла, и под этим же названием сохраним его на сервере
        const { originalname } = file
        cb(null, originalname)
        
    }
})
const code_storage = multer.diskStorage({
    destination: async(req, file, cb) => {
      // '/files' это директория в которую будут сохранятся файлы 
      const { originalname } = file
      const directoryPath = `./public/users/${req.session.user.id}/product${req.session.productId}`;

      try {
        fs.accessSync(directoryPath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          // Папка не существует, создаем ее
          fs.mkdirSync(directoryPath, { recursive: true });
        } else {
          throw err;
        }
      }
  
      const codePath = path.join(directoryPath, 'code');
  
      try {
        fs.accessSync(codePath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          // Папка не существует, создаем ее
          fs.mkdirSync(codePath);
        } else {
          throw err;
        }
      }
      let product = await models.product.findOne({where:{id:req.session.productId}})
      product.codePath = originalname;
      product.save()
      cb(null, codePath);
    },
    filename: (req, file, cb) => {
  // Возьмем оригинальное название файла, и под этим же названием сохраним его на сервере
      const { originalname } = file
      cb(null, originalname)
    }
})
const result_storage = multer.diskStorage({
    destination: async(req, file, cb) => {
      // '/files' это директория в которую будут сохранятся файлы
      const { originalname } = file
      const directoryPath = `./public/users/${req.session.user.id}/product${req.session.productId}`;

      try {
        fs.accessSync(directoryPath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          // Папка не существует, создаем ее
          fs.mkdirSync(directoryPath, { recursive: true });
        } else {
          throw err;
        }
      }
  
      const codePath = path.join(directoryPath, 'result');
  
      try {
        fs.accessSync(codePath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          // Папка не существует, создаем ее
          fs.mkdirSync(codePath);
        } else {
          throw err;
        }
      }
      let product = await models.product.findOne({where:{id:req.session.productId}})
      product.resultPath = originalname;
      product.save()
      cb(null, codePath);
    },
    filename: (req, file, cb) => {
  // Возьмем оригинальное название файла, и под этим же названием сохраним его на сервере
      const { originalname } = file
      cb(null, originalname)
    }
})
exports.upload = multer({ storage: user_storage })
exports.uploadCode = multer({ storage: code_storage })
exports.uploadResult = multer({ storage: result_storage })