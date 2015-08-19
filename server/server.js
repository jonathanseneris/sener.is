var express = require('express');
var app = express();
var config = require('./config/config');

app.use(express.static('dist'));


app.get('/', function(req, res) {
    res.sendFile('index.html', {root: 'dist'});
});

// require('./routes.js')(app);

//Initialization
app.listen(config.port);
console.log('Listening on port ' + config.port);