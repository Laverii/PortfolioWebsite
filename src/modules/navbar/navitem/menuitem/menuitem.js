var MenuItem = function(navItem, label) {
    this.navItem = navItem;

    this.intialize = function(){
        this.menuItemElement = DomUtils.create('div', this.navItem.getNavItemElement());
        this.menuItemElement.innerHTML = `<label>${label}</label>`;
    };

    this.intialize();
};