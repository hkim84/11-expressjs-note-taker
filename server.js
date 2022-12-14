const fs = require ('fs');
const path = require('path');
const apiRoute = require('./routes/apiRoutes.js');
const htmlRoute = require('./routes/htmlRoutes.js');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// parsing incoming data in key value
app.use(express.urlencoded({extended: true}));
// parese incoming json data
app.use(express.json());
//access to public files
app.use(express.static('public'));
// acces to api js
app.use('/api', apiRoute);
// access to html js
app.use('/', htmlRoute);

// server
app.listen(PORT, ()=> {
    console.log(`API server now on port ${PORT}`);
});