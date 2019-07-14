// Requiring router
const router = require('express').Router(); 

// Defining my Sessions by requiring the model 
const Sessions = require('./sessions-model.js'); 

// Test get route 
router.get('/', (req, res) => {
    Sessions.find()
    .then (sessions => {
        res.status(200).json(sessions)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

// Exporting 
module.exports = router; 