
const db = require("./connection/database");
const models = require("./models");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

var express = require("express");
var app = express();
const cors = require("cors");
const sessions = require('express-session');
const bcrypt = require("bcrypt");

// db.sync({alter:true});

async function DB(){
    let salt = await bcrypt.genSalt(10)
    let password =await bcrypt.hash("1234",salt)
    models.user.findOrCreate({where:{username:"admin"},defaults:{username:"admin", email:"aleksei22891@.com", role: 3, password, salt}})
}
DB()

// ===================settings============================
app.set('view engine', 'ejs');
app.use(cors());
//session middleware
app.use(sessions({
    secret: "marsel",
    saveUninitialized:true,
    resave: false
}));
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "4000mb"}));
app.use(bodyParser.urlencoded({limit: "4000mb", extended: true, parameterLimit:5000000}));
// ===================settings============================

require("./routes/commonPages.routes")(app)
require("./routes/userPages.routes")(app)
require("./routes/guestFunc.routes")(app)
require("./routes/userFunc.routes")(app)
require("./routes/data.routes")(app)
// ==============================routes=============================


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// require("./routes/form_page.routes")(app)
// ==============================routes=============================
app.listen(3000); 