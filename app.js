/**
 * Module dependencies.
 */

let express = require('express')
    , routes = require('./routes');
let fs = require("fs");


let app = module.exports = express.createServer();
let port = process.env.NODE_ENV | 3000;


// Configuration

app.configure(()=> {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret: 'kdfgdfgkodfgdffg'}));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', ()=> {
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', ()=> {
    app.use(express.errorHandler());
});

fs.readdirSync('./controllers').forEach((file)=> {
    if (file.substr(-3) == '.js') {
        let route = require('./controllers/' + file);
        route.controllers(app);
    }
});

app.listen(port, ()=> {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
