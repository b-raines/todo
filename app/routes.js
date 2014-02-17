// load the Todo model
var Todo = require('./models/todo');

// expose routes to app with module.exports
module.exports = function(app) {
	// api
	// get all todos
	app.get('/api/todos', function(req, res) {
		// use mongoose to get all todos in db
		Todo.find(function(err, todos) {
			if (err) res.send(err);
			res.json(todos);
		});
	});

	// create new todo
	app.post('/api/todos', function(req, res) {
		Todo.create({
			text: req.body.text,
			done: false
		}, function(err, todos) {
			if (err) res.send(err);
			
			// get and return all todos
			Todo.find(function(err, todos) {
				if (err) res.send(err);
				res.json(todos);
			});
		});
	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id: req.params.todo_id
		}, function(err, todos) {
			if (err) res.send(err);

			// get and return all todos
			Todo.find(function(err, todos) {
				if (err) res.send(err);
				res.json(todos);
			});
		});
	});
};