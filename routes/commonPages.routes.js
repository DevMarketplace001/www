const commonPages = require('../controllers/commonPages');
const checkData = require('../middleware/checkData')
module.exports = function(app){
    app.get('/', checkData.checkUserData, commonPages.index)
    app.get('/about', checkData.checkUserData, commonPages.about)
    app.get('/contact', checkData.checkUserData, commonPages.contacts)
    app.get('/product/:id', checkData.checkUserData, commonPages.product);
}