// called from server.js for "/" routes

const express = require('express');
const router = express.Router();

const startingContent = 'This is the home page';

router.get("/", (req,res) => {    //looking in views for
    res.render('index', {startingContent: startingContent});           // index.ejs
});

module.exports = router;