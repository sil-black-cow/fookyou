'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

// Start the server
const start = async function() {
    try {
  
        await server.register(require('inert'));
      
        // dist 디렉토리에 있는 파일을 서빙해준다
        // scripts/dist.js => dist/bundle.js
        server.route({
            method :'GET',
            path   :'/scripts/{param*}',
            handler: {
                directory: {
                    path: './dist'
                }
            }
        });
      
        // Add the route
        server.route({
            method :'GET',
            path   :'/',
            handler: function (request, h) {
            return h.file('./dist/index.html');
            }
        });
  
        await server.start();
    }
    catch (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
  };

start();