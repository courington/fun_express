var express = require('express');
var app = express();

// bodyParser middleware for POST
app.use(express.bodyParser());

var categories = [
	{
		name: 'groceries',
		cost: 300
	},
	{
		name: 'phone',
		cost: 170
	},
	{
		name: 'cable',
		cost: 80
	},
	{
		name: 'mortgage',
		cost: 980
	},
	{
		name: 'beer',
		cost: 30
	},
];

app.get('/', function(req, res) {
	res.json(categories);
});

app.get('/category/random', function(req, res) {
	var id = Math.floor(Math.random() * categories.length);
  var q = categories[id];
  res.json(q);
});

app.get('/category/:id', function(req, res) {
	if(categories.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  var q = categories[req.params.id];
  res.json(q);
});

app.post('/category', function(req, res) {
	if(!req.body.hasOwnProperty('name') ||
     !req.body.hasOwnProperty('cost')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newCategory = {
    name : req.body.name,
    cost : req.body.cost
  };

  categories.push(newCategory);
  res.json(true);
});

app.delete('/category/:id', function(req, res) {
	if(categories.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

  categories.splice(req.params.id, 1);
  res.json(true);
});

app.listen(process.env.PORT || 8080);
