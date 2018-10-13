var NavItem = function (navBar, label, options) {

    this.options = {
        width: options ? options.width : 150
    };

    this.navBar = navBar;
    
    this.initialize = function () {
        this.initNavItemElement();

        this.menuItems = [];
    };

    this.initNavItemElement = function () {
        //Create a div element representing our nav item element and make it a child of the nav bar.
        //Then store a reference to the nav bar
        this.navItemElement = DomUtils.create('div', navBar.getNavItemsContainer(), 'nav-item');

        //Set the label
        this.navItemElement.innerHTML = `<label>${label}</label>`;

        // Set the width of the nav item element
        this.navItemElement.style.width = `${this.options.width}px`;

    }

    this.getWidth = function(){
        return this.options.width;
    }
    this.getNavItemElement = function () {
        return this.navItemElement;
    };

    this.addMenuItem = function(label){
        var menuItem = new MenuItem(this, label);
        this.menuItems.push(menuItem);

        return menuItem;
    };

    this.initialize();
};