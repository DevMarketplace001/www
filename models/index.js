const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const validator = require("validator");

const models = {};
const views = {};
views.product_cart = require('./views/product_cart')
views.popular = require('./views/popular')
views.product_history = require('./views/product_history')
models.views = views;
models.cart = require("./cart");
models.categories = require("./categories");
models.history = require("./history");
models.product = require("./product");
models.products_tags = require("./products_tags");
models.tags = require("./tags");
models.user = require("./user");


models.Op = sequelize.Op;
models.sequelize = sequelize;
models.bcrypt = bcrypt;
models.validator = validator;

module.exports = models;