const express = require('express');
const router = express.Router();

const contactContent = "This is the contact page";

router.get("/", function(req, res){
    res.render("contact/index", {contactContent: contactContent});
  });
 
module.exports = router;