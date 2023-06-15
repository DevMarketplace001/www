const userPages = require("../controllers/userPage");
const checkData = require('../middleware/checkData');

module.exports = function(app){
    app.get('/profile', checkData.checkUserData, checkData.user, userPages.profile);
    app.get('/manager_cat', checkData.checkUserData, checkData.user, userPages.managerCat);
    app.get('/manager_tag', checkData.checkUserData, checkData.user, userPages.managerTag);
    app.get('/manager_product', checkData.checkUserData, checkData.user, userPages.addProduct);
    app.get('/products', checkData.checkUserData, checkData.user, userPages.products);
    app.get('/cart', checkData.checkUserData, checkData.user, userPages.cart);
    app.get('/history', checkData.checkUserData, checkData.user, userPages.history);
    app.get('/cabinet', checkData.checkUserData, checkData.user, userPages.cabinet);
}