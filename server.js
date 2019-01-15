
// DEPENDENCIES //

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 5555;

// EXPRESS DATA PARSING //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('app/public'));

// ROUTER //

require('./app/routing/apiroutes.js')(app); 
require('./app/routing/htmlroutes.js')(app);

// LISTENER //

app.listen(PORT, function () {
  console.log('Server listening on PORT: ' + PORT);
});