/**
 * Dependencies.
 */
var teacher 		 = require('teacher');
var http             = require('http');
var fs               = require('fs');

module.exports = function(app, config, passport) {

    // INIT ================================
    app.get(config.public.url.admin, function(req, res) { // '/'
        console.log(req.user);

        res.render('index', {
            title: 'Postit admin',
            env: config.env,
            domain: config.domain.url,
            session: req.user
        });
    });

    // GETFILE ==============================
    app.post('/getFile', function(req, res) {
        // console.log(req);
        var file = 'public/test.txt';
        fs.writeFile(file, req.body.msg, function(err) {
            if(err) {
                return console.log(err);
            }
            else {
                console.log("The file was saved!");
                res.send(200);
            }
        });
    });

    var file = fs.createWriteStream("test.txt");
    app.get("test.txt", function(response) {
        response.pipe(file);
    });

    // CHECKER =============================
    app.post('/check', function(req, res) {
    	var lang = req.body.lang;
    	var text = req.body.html;
    	console.log(text);
		/**
		 * Advanced with custom language.
		 */
		var teach = new teacher.Teacher(lang, ['ignored type']);

		teach.check(text, function(err, data) {
		    console.log(data);
		    res.send(data);
		});
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        if(config.domain.url) res.redirect(config.domain.url);
        else res.redirect('/');
    });

    if (config.domain.port) {
        config.domain.port = ":" + config.domain.port;
    }
};