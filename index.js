// Requiring server
const server = require('./api/server.js'); 

// Telling the server what port to listen on 
const port = 4200; 

server.listen(port, function() {
    console.log(`\n *** The server is running on localhost:${port} *** \n`)
})