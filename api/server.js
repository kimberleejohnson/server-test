// Requiring dependencies
const express = require('express'); 
const helmet = require('helmet'); 

// Describing my server
const server = express(); 

// Telling my server what to use 
server.use(express.json()); 
server.use(helmet()); 

server.get('/', req, res => {
    res.send("Up and running!")
});

module.exports = server; 