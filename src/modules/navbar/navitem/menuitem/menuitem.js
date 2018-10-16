var MenuItem = function(navItem, label, options) {
    this.navItem = navItem;
    this.options ={
        width: options ? options.width : 150
    };

    this.intialize = function(){
        //Create a div to hold our menu item
        this.menuItemElement = DomUtils.create('div', this.navItem.getMenuItemsContainer(), 'menu-item');
        //Add a label to the div
        this.menuItemElement.innerHTML = `<label>${label}</label>`;
        //Set the width of the div
        this.menuItemElement.style.width = `${this.options.width}px`;
    };

    this.getWidth = function (){
        return this.options.width;
    };

    this.intialize();
};