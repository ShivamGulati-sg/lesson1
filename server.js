/**
 * Created by shiva on 2016-09-09.
 */
// link to node's http library
var http = require('http');

// start a local web server on port 3000 and listen for events
http.createServer(function(request , response){
  response.writeHead(200); // http status ok
    response.end('Our first node page'); // equivalent of echo command
}) .listen(3000);

// print that the sever has started
console.log('Server running on port 3000');

