const userFunc = require("../controllers/userFunc");
const checkData = require('../middleware/checkData');
var uploader = require("../connection/uploader");

module.exports = function(app){
    app.get('/logout', checkData.user, userFunc.logout);
    app.post('/chart', checkData.user, userFunc.gifChart);
    app.post('/category', checkData.user, userFunc.createCat);
    app.post('/tag', checkData.user, userFunc.createTag);
    app.post('/product', checkData.user, userFunc.checkProduct);
    app.post('/cart', checkData.user, userFunc.insertCart);
    app.post('/history', checkData.user, userFunc.insertHistory);
    app.put('/product_code', checkData.user, uploader.uploadCode.single("code"),[], userFunc.uploadCode);
    app.put('/product_result', checkData.user, uploader.uploadResult.single("result"),[], userFunc.uploadResult);
    app.put('/profile', checkData.user, userFunc.updateProfile);
    app.put('/avatar', checkData.user, checkData.checkAvatarDirectory, uploader.upload.single("avatar"),[], userFunc.updateAvatar);
    app.put('/product', checkData.user, userFunc.updateProduct);
    app.delete('/category', checkData.user, userFunc.deleteCat);
    app.delete('/tag', checkData.user, userFunc.deleteTag);
    app.delete('/product', checkData.user, userFunc.productDelete);
    app.delete('/cart', checkData.user, userFunc.cartDelete);
}