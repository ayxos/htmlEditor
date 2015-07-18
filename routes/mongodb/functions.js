var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(app, db) {
    return {


// ================== USER

        getUsers: function (callback) {
            db.User.find(function (err, users) {
                if (err) throw err;

                if (users.length > 0) {
                    callback(users);
                } else {
                    callback(null);
                }
            });
        },

        getUserById: function (id, callback) {
            db.User.findOne({_id: id}, function (err, user) {
                if (err) throw err;

                if (user) {
                    callback(user);
                } else {
                    callback(null);
                }
            });
        },

        getUserByUsername: function (username, callback) {
            db.User.findOne({username: username}, function (err, user) {
                if (err) throw err;

                if (user) {
                    callback(user);
                } else {
                    callback(null);
                }
            });
        },


// ================== POST

        getPostById: function (id, callback) {
            db.Article.findOne({_id: id}, function (err, post) {
                if (err) throw err;

                if (post) {
                    callback(post);
                } else {
                    callback(null);
                }
            });
        },

        getPostByUser: function (user, callback) {
            db.Article.find({author: user}, function (err, post) {
                if (err) throw err;

                if (post) {
                    callback(post);
                } else {
                    callback(null);
                }
            });
        },

        getPostBySlug: function (slug, callback) {
            db.Article.findOne({slug: slug}, function (err, post) {
                if (err) throw err;

                if (post) {
                    callback(post);
                } else {
                    callback(null);
                }
            });
        },

        getPostByTitleId: function (titleId, callback) {
            db.Article.findOne({titleId: titleId}, function (err, post) {
                if (err) throw err;

                if (post) {
                    callback(post);
                } else {
                    callback(null);
                }
            });
        },

        getPostByDate: function (callback) {
            var convertPosts = [];
            db.Article.find().sort('-postDate').find(function (err, posts) {
                if (err) throw err;

                callback(posts);
            });
        },

        getPostByDateP: function (callback) {
            var publishPosts = [];
            db.Article.find().sort('postDate').find(function (err, posts) {
                if (err) throw err;

                if (posts) {
                    posts.forEach(function(thisPost) {
                        if (thisPost.state === "Publish") {
                            publishPosts.push(thisPost);
                        }
                    });
                    callback(publishPosts);
                } else {
                    callback(null);
                }
            });
        },

        getPostByCategory: function (category, callback) {
            db.Article.find({category: category}).sort('-postDate').exec(function (err, posts) {
                if (err) throw err;

                if (posts) {
                    callback(posts);
                } else {
                    callback(null);
                }
            });
        },


        getPostByTag: function (regex, callback) {
            db.Article.find().sort('-postDate').where('tags').regex(regex).exec(function (err, posts) {
                if (err) throw err;

                if (posts) {
                    callback(posts);
                } else {
                    callback(null);
                }
            });
        },

// ================== NOTES

        getNotesByUser: function (user, callback) {
            db.Note.find({author: user}, function (err, notes) {
                if (err) throw err;

                if (notes) {
                    callback(notes);
                } else {
                    callback(null);
                }
            });
        },

        getNoteById: function (id, callback) {
            db.Note.findOne({_id: id}, function (err, post) {
                if (err) throw err;

                if (post) {
                    callback(post);
                } else {
                    callback(null);
                }
            });
        },

// ================== CATEGORIES

        getCategories: function (callback) {
            db.Article.find().distinct('category', function (err, categories) {
                if (err) throw err;

                if (categories) {
                    callback(categories);
                } else {
                    callback(null);
                }
            });
        }
    };
};