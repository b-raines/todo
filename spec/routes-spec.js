var request = require('supertest'),
	mongoose = require('mongoose'),
	express = require('express');

var server = require('../server.js');

request = request('http://localhost:3000');

// GET /
describe('GET /', function() {
	it('should respond with html', function(done) {
		request
			.get('/')
			.expect('Content-Type', /html/)
			.expect(200, done);
	});
});

// GET todos
describe('GET /api/todos', function() {
	it('should respond with json', function(done) {
		request
			.get('/api/todos')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});
});


// POST todo
describe('POST /api/todos', function() {
	it('should create a new todo', function(done) {
		request
			.post('/api/todos')
			.send({ text: 'test', done: false })
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {

				// DELETE todo
				describe('DELETE /api/todos/:todo_id', function() {
					it('should delete a todo', function(done) {
						request
							.del('/api/todos/' + res.body[res.body.length-1]._id)
							.expect('Content-Type', /json/)
							.expect(200, done);
					});
				});
				done();
			});
	});
});

