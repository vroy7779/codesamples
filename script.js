	var portApp = angular.module('portApp', ['ngRoute']);
	portApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

                        .when('/portf', {
				templateUrl : 'port.html',
				controller  : 'portfController'
			})

			// route for the about page
			.when('/expe', {
				templateUrl : 'expe.html',
				controller  : 'expeController'
			})

			.when('/educ', {
				templateUrl : 'edu.html',
				controller  : 'educController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'contact.html',
				controller  : 'contactController'
			});


	});