var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt-nodejs'),
    config      = require('../config');
var Schema      = mongoose.Schema;

mongoose.connect(process.env.MONGODDBB_URI, function(err) {
    if (err) throw err;
});

var userSchema = mongoose.Schema({
    username: String,
    fullName: String,
    provider: String,
    image: String,
    role: {
        type: String,
        default: 'user'
    },
    email: String,
    registerDate: {
        type: Date,
        default: Date.now
    },
    accountState: {
        type: String,
        default: 'waiting'
    },
    password: String,
    salt: String
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    console.warn('PASSWORD', password);
    console.warn('THIS', this.local.password);
    return bcrypt.compareSync(password, this.local.password);
};

var articleSchema = mongoose.Schema({
    title: String,
    content: String,
    markdown: String,
    wysiwyg: String,
    author: { type : Schema.ObjectId, ref : 'user' }
});

var noteSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    hours: {
        type: Number,
        default: 0
    },
    work: String,
    mistakes: String,
    suggestions: String,
    clarifications: String,
    comments: String,
    // comments: Array,
    articleId: Schema.ObjectId,
    author: { type : Schema.ObjectId, ref : 'user' }
});

module.exports = {
    User: mongoose.model('user', userSchema),
    Article: mongoose.model('article', articleSchema),
    Note: mongoose.model('note', noteSchema)
};