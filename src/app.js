var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.type('text/plain');
	res.send('foobar baz');
});

app.listen(process.env.PORT || 8080);