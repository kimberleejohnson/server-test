// Requiring dependencies
const express = require('express'); 
const helmet = require('helmet'); 

// Importing my sessions router
const sessionsRouter = require('../sessionsTestRouters/sessions-router.js');

// Describing my server
const server = express(); 

// Telling my server what to use 
server.use(express.json()); 
server.use(helmet()); 
server.use('/sessions', sessionsRouter);

server.get('/', (req, res) => {
    res.send("Up and running!")
});

module.exports = server; 