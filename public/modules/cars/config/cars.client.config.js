'use strict';

// Configuring the Cars module
angular.module('cars').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Purchase Requests', 'cars', 'dropdown', '/cars(/create)?');
		Menus.addSubMenuItem('topbar', 'cars', 'View Item', 'cars');
		Menus.addSubMenuItem('topbar', 'cars', 'Add an Item', 'cars/create');
	}
]);