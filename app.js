    var
        express = require('express'),
        routes  = require('./routes'),
        user    = require('./routes/user'),
        http    = require('http'),
        path    = require('path'),
        io      = require('socket.io'),

        app     = express(),
        server  = undefined,
        host    = 'localhost',
        port    = 3800,
    end;

    // STEP 1

    // all environments
    app.set('port', process.env.PORT || port);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);

    app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));

    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }

    app.get('/', routes.index);
    app.get('/users', user.list);

    server = http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });


// Socketserver mit socket.io
    var io = require('socket.io').listen(server);

    // Socketbundle
    io.sockets.on('connection', function (socket) {

    // CHAT
        socket.on('chatmessage', function (data) {
            io.sockets.emit('chatmessage',   data);
        });

    });