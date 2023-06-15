const data = require('../controllers/data');
const checkData = require('../middleware/checkData')
module.exports = function(app){
    app.post('/username', checkData.checkUserData, data.username)
    app.post('/email', checkData.checkUserData, data.email)
}