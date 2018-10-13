NavBar = function(){
	this.initialize = function(){
		//Get the root app dic element by searching for it by id
		//Create the nav bar element as a dic and make it a child of the root app div element
		var parent = document.getElementById('app');
		this.navBarElement = DomUtils.create('div', parent, 'nav-bar');
		this.navItems = [];
	};

	this.getNavBarElement = function() {
		return this.navBarElement;
	};

	this.addNavItem = function(label){
		//Create a nav item and add it to the list of nav items
		this.navItems.push(new NavItem(this, label));

	};

	this.initialize();
};