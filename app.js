(function(){

	'use strict';

	angular.module('Module1', [])

	.controller('Module1Controller', Module1Controller);

	Module1Controller.$inject = ['$scope'];

	function Module1Controller($scope){

		$scope.lunch_items = '';

		$scope.displayLunchMessage = function(){

			var no_of_lunch_items_enetered = checkNumberOfLunchItemsEntered($scope.lunch_items);

			$scope.lunch_message = setMessageType(no_of_lunch_items_enetered);
		}
	}

	function setMessageType(no_of_lunch_items_enetered){
		
		if (no_of_lunch_items_enetered) {

			if (no_of_lunch_items_enetered <= 3) {

				return 'Enjoy!';
			}else{

				return 'Too much!';
			}
		
		}

		return 'Please enter data first';
	}

	function checkNumberOfLunchItemsEntered(input_string){

		if (input_string) {

			var lunch_items = input_string.split(',');
			
			if (numberOfEmptyElements(lunch_items)) {

				return (lunch_items.length - numberOfEmptyElements(lunch_items));
			}
			return lunch_items.length;		
		}

		return false;
	}

	function emptyElements(element){

		return element == "" || element == " ";
	}

	function numberOfEmptyElements(elements_array){

		return elements_array.filter(emptyElements).length;
	}

})();