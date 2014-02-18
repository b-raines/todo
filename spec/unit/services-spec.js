describe("todoApp", function() {
	var Todos;

	// load todoApp
	beforeEach(module('todoApp'));

	// inject Todos factory
	beforeEach(inject(function(_Todos_) {
		Todos = _Todos_;
	}));

	// Todos factory
	describe('Todos', function() {

		// GET todos
		it('should get to /api/todos', function() {
			expect(Todos.get).toMatch('get', '/api/todos');
		});

		// POST todos
		it('should post to /api/todos', function() {
			expect(Todos.create).toMatch('post', '/api/todos');
		});

		// DELETE todos
		it ('should delete to /api/todos', function() {
			expect(Todos.delete).toMatch('delete', '/api/todos');
		});
	});
});