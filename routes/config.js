var config = {
    domain: {
        url: '', // /htmlEditor
        host: 'http://localhost', // http://ayxos.com/htmlEditor
        port: '8007' // null
    },
    env: 'dev', // dev or prod
    mongodb: {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'blogio'
    },
    twitter: {
        consumerKey: 'xxx',
        consumerSecret: 'xxx'
    },
    public: {
        blogName: 'postit',
        blogDescription: 'Small lightweight and real-time system blogging',
        api: {
            articles: '/articles',
            articlesPublished: '/articlespublished',
            users: '/users'
        },
        url: {
            authLocal: '/auth/local',
            admin: '/',
            blog: '/blog'
        }
    }
};

module.exports = config;
