// Import express and create router object
let express = require('express');
let router = express.Router();

// '/' is actually considered as /about
router.get('/', (request, response, next) => {
    // Pass more data > alternatively this could come from a DB
    let tools = [
        {'name': 'Node'},
        {'name': 'Express'},
        {'name': 'Handlebars'}
    ]; // this is the model

    response.render('about', {title: 'About Us', tools: tools});

});

module.exports = router;