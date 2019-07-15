// Loading environment variable as early as possible
require('dotenv').config(); 

// Requiring server
const server = require('./api/server.js'); 

// Making port dynamic, so it can listen on different environments
// process.env object lets us read different environment variables 
const port = process.env.PORT; 

server.listen(port, function() {
    console.log(`\n *** The server is running on localhost:${port} *** \n`)
})