const express = require('express');
const router = express.Router();


const aboutContent = "This is the about page and sends it to the about page";

router.get("/", function(req, res){
    res.render("about/index", {aboutContent: aboutContent});
  });
  
module.exports = router;  