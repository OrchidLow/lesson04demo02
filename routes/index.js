
// router/ controller file
var express = require('express');
var router = express.Router();

/* GET home page. */
// Same as connect > function with 3 parameters
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/about', (request, response, next) => {
//   // Pass more data > alternatively this could come from a DB
//   let tools = [
//     { 'name': 'Node'},
//     { 'name': 'Express'},
//     { 'name': 'Handlebars'}
//   ]; // this is the model

//   response.render('about', {title: 'About Us', tools: tools });
// });

module.exports = router;
