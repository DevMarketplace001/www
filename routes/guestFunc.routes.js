const guestFunc = require('../controllers/guestFunc');

module.exports = function(app){
    app.post('/login', guestFunc.login)
    app.post('/registration', guestFunc.registration)
    app.post('/search', guestFunc.search)
}