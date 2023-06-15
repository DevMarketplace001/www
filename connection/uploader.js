var fs = require('fs');
var fs_extra = require('fs-extra');
var multer = require("multer");
const path = require('path');
var models = require('../models');
const user_storage = multer.diskStorage({
  destination: async(req, file, cb) => {
    // '/files' это директория в которую будут сохранятся файлы 
    const { originalname } = file
    const directoryPath = `./public/users/${req.session.user.id}`;
    console.log("PUTCH - " + directoryPath)
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

    const codePath = path.join(directoryPath, 'avatar');

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
    let user = await models.user.findOne({where:{id: req.session.user.id}});
    user.img = originalname;
    fs_extra.emptyDirSync(codePath);
    await models.user.update({img:originalname},{where:{id: req.session.user.id}})
    cb(null, codePath);
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
      if (!req.file) {
        fs_extra.emptyDirSync(codePath);
      }
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
      if (!req.file) {
        fs_extra.emptyDirSync(codePath);
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