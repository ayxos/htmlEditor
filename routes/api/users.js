module.exports = function(app, config, db, query) {
    app.get('/users', function(req, res) {
        if (req.user) {
            console.log('req user', req.user);
            query.getUsers(function(users) {
                res.send(users);
            });
        } else {
            res.send(401, {status:"Unauthorized"});
        }
    });

    app.get('/me', function(req, res) {
        if (req.user) {
            query.getUserById(req.user._id, function(user) {
                res.send(user);
            });
        } else {
            res.send(401, {status:"Unauthorized"});
        }
    });

    app.post('/users', function(req, res) {
        console.log('users posts');
        console.log(req.body);
        console.log(req.user);

        var newUser = new db.User();

        req.body._id = newUser._id;

        newUser.username = req.body.username;
        newUser.author = req.user.username;
        newUser.slug = req.body.slug;
        newUser.category = req.body.category;
        newUser.tags = req.body.tags;
        newUser.content = req.body.content;

        newUser.save();

        io.sockets.emit('users::create', newUser);
        io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green bold">user created</div>');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/users/:id', function(req, res) {
        console.log('users put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.getUserById(id, function (user) {
            user.fullName = req.body.fullName;
            user.email = req.body.email;

            user.save();

            io.sockets.emit('users::update', user);
            io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green bold">user updated</div>');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/users/:id', function(req, res) {
        console.log('Users delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.getUserById(id, function (user) {
            console.log('userToDelete', user);
            io.sockets.emit('notifications', '<div class="bck b_red_light text color c_red padding_small"><div>' + user.username + '</div> <strong>removed</strong></div>');

            user.remove();

            io.sockets.emit('users::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};