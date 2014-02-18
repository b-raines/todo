angular.module('todoApp.controllers', [])
	
	.controller('mainController', function($scope, $http, Todos) {
		$scope.formData = {};

		// GET
		// when landing on a page, use service to get and show all todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
			});

		// CREATE
		// when submitting add form, send text to node API
		$scope.createTodo = function() {
			
			// validate the formData to make sure it's not blank
			if (!$.isEmptyObject($scope.formData)) {
				Todos.create($scope.formData)
					.success(function(data) {
						$scope.formData = {};
						$scope.todos = data;
					});
			}
		};

		// DELETE
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			Todos.delete(id)
				.success(function(data) {
					$scope.todos = data;
				});
		};
	});