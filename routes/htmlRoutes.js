const path = require('path');
const router = require('express').Router();

// getting index html
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//getting notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// getting return to index.htnml
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});



module.exports = router;