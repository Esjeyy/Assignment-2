var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', {title:"Home"})
  
});

// get page about // 
router.get('/aboutme', function(req, res, next) {
  res.render('index', {title:"about_me"});
});


// Get Contact Page // 
router.get('/Contacts', function(req, res, next) {
  res.render('index', {title: "contact"});
});



// Get posts page // 
router.get('/posts', function(req, res, next){
  res.render('index', {title:"Posts"});
});






module.exports = router;
