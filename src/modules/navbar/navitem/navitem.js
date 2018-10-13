var NavItem = function (navBar, label) {
    this.initialize = function (navBar, label) {
        //Create a div element representing our nav item element and make it a child of the nav bar.
        //Then store a reference to the nav bar
        this.navItemElement = DomUtils.create('div', navBar.getNavBarElement(), 'nav-item');
        this.navBar = navBar;

        //Set the label
        this.navItemElement.innerHTML = label;
    };
    this.initialize(navBar, label);
};