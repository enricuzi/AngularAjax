var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('app'));

var server = app.listen(8000, function () {

    var port = server.address().port;

    console.log('Server started at http://localhost:%s', port);

});