describe('Todo', function() {
	var Todo = require('../app/models/todo.js');
	var testTodo = new Todo({
			text: 'hello',
			done: false
	});

	it("should have the correct text", function(done) {
		expect(testTodo.text).toEqual('hello');
		done();
	});

	it('should have the correct done attribute', function(done) {
		expect(testTodo.done).toBe(false);
		done();
	});

	it ('should correctly update done attribute', function(done) {
		testTodo.done = true;
		expect(testTodo.done).toBe(true);
		done();
	});
});