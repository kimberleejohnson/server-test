// Requiring my database 
const db = require('../dbConfig.js'); 

// Kinds of actions I'm writing
module.exports = {
    find,  
};

// What to return on find
function find() {
    return db('sessions');
}