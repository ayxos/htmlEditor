// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;
var flash            = require('connect-flash');

module.exports = function(app, config, db, passport) {

// normal routes ===============================================================

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            db.User.findOne({ email :  email }, function(err, user) {
                console.log('searching...', email, password);
                // if there are any errors, return the error
                if (err)  {
                    console.log('error1...', email);
                    return done(err);
                }
                // if no user is found, return the message
                if (!user) {
                    console.log('error2...', email);
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }
                // if (!user.validPassword(password)) {
                //     console.log('error3...', email);
                //     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                // }
                // all is well, return user
                else {
                    console.log('finded...', email);
                    return done(null, user);
                }
            });
        });

    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            // if the user is not already logged in:
            if (!req.user) {
                db.User.findOne({ email :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // create the user
                        var newUser            = new db.User();

                        // newUser.local.name     = req.body.name;
                        // newUser.local.email    = email;
                        // newUser.local.password = newUser.generateHash(password);

                        newUser.uid = '100';
                        newUser.username = req.body.name;
                        newUser.fullName = req.body.name;
                        newUser.email = email;
                        newUser.password = newUser.generateHash(password);
                        newUser.image = 'lala.jpg';
                        newUser.provider = 'local';

                        newUser.save(function(err) {
                            if (err)
                                throw err;

                            return done(null, newUser);
                        });
                    }

                });
            // if the user is logged in but has no local account...
            } else if ( !req.user.local.email ) {
                // ...presumably they're trying to connect a local account
                var user            = req.user;
                user.local.name     = req.body.name;
                user.local.email    = email;
                user.local.password = user.generateHash(password);
                user.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, user);
                });
            } else {
                // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                return done(null, req.user);
            }

        });

    }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        db.User.findOne({_id: id}, function (err, user) {
            done(err, user);
        });
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login/login.jade', {
                message: req.flash('loginMessage'),
                domain : config.domain.url
            });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : config.domain.host + config.domain.port + config.public.url.admin, // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('login/signup.jade', {
                message: req.flash('signupMessage'),
                domain : config.domain.url
            });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : config.domain.host + config.domain.port + config.public.url.admin, // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('login/connect-local.jade', {
                message: req.flash('loginMessage'),
                domain : config.domain.url
            });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : config.domain.host + config.domain.port + config.public.url.admin, // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
};