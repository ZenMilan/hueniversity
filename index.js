var Hapi = require('hapi');

var internals = {
    pkg: require('./package.json')
};

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 8000 });

server.route({
    method: 'GET',
    path: '/version',
    handler: function (request, reply) {

        return reply({ version: internals.pkg.version });
    },
    config: {
        description: 'Returns the version of the server'
    }
});

server.start(function (err) {

    if (err) {
        throw err
    }

    // once we have something like good-console we can use server.log here
    console.log('Server started at: ' + server.info.uri);
});
