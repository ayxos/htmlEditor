module.exports = function(app, config, db, query) {
    app.get('/notes', function(req, res) {
        if (req.user) {
            query.getNotesByUser(req.user, function(notes) {
                res.send({data: notes});
            });
        } else {
            res.send(401, {status:"Unauthorized"});
        }
    });

    app.post('/notes', function(req, res) {
        console.log('new note');
        console.log(req.body);

        var newNote = new db.Note();

        req.body._id = newNote._id;

        newNote.hours = req.body.hours;
        newNote.work = req.body.work;
        newNote.mistakes = req.body.mistakes;
        newNote.suggestions = req.body.suggestions;
        newNote.clarifications = req.body.clarifications;
        newNote.comments = req.body.comments;

        newNote.author = req.user;
        newNote.articleId = req.body.articleId;

        newNote.save();

        console.warn('newNote', newNote);

        res.send(200, {status:"Ok", object: newNote});
    });

    app.delete('/notes/:id', function(req, res) {
        console.log('notes delete');

        var id = req.params.id;
        query.getNoteById(id, function (note) {
            note.remove();
            res.send(200, {status:"Ok"});
        });
    });
};