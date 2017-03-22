var express         = require('express'),
    passport        = require('passport'),
    db              = require('./routes/mongodb/schemas'),
    path            = require('path'),
    flash           = require('connect-flash'),
    errorHandler    = require('errorhandler'),
    favicon         = require('serve-favicon');

var app             = express();
    server          = require('http').createServer(app),
    io              = require('socket.io').listen(server);

var query           = require('./routes/mongodb/functions')(app, db),
    config          = require('./routes/config');

var port            = process.env.PORT || config.domain.port;

var morgan          = require('morgan')
  , cookieParser    = require('cookie-parser')
  , bodyParser      = require('body-parser')
  , session         = require('express-session');


app.set('port', process.env.PORT || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(session({secret: 'monkey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.get('/postit/config', function(req, res) {
    res.send(config.public);
});

require('./routes/common/index.js')(app, config, passport);
require('./routes/api/notes')(app, config, db, query);
require('./routes/api/articles')(app, config, db, query);
require('./routes/api/users')(app, config, db, query);
require('./routes/common/auth')(app, config, db, passport);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);