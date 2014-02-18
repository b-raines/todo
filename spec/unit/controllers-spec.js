describe('todoApp', function() {
	// load todoApp
	beforeEach(module('todoApp'));

	describe('mainController', function() {
		var rootScope, mainController;

		// inject controller and scope
		beforeEach(inject(function($rootScope, $controller) {
			rootScope = $rootScope.$new();
			mainController = $controller('mainController', {$scope: $rootScope});
		}));

		// createTodo
		it('should respond to createTodo', function() {
			expect(rootScope.createTodo).toBeDefined();
		});

		// deleteTodo
		it('should respond to deleteTodo', function() {
			expect(rootScope.deleteTodo).toBeDefined();
		});

		// formData
		it('should respond to formData', function() {
			expect(rootScope.formData).toBeDefined();
		});

	});
});
