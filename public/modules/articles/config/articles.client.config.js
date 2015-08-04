'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Products', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'Publish  Products', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'List Products', 'articles/create');
	}
]);