let HomeController =require("../controllers/HomeContrller");
module.exports.routes = (app)=> {

    app.get('/',HomeController.getName(req,res));

    app.get('/login', routes.login);
};