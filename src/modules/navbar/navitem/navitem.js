var NavItem = function (navBar, label, options) {

    this.options = {
        width: options ? options.width : 150,
        onClick: options ? options.onClick : undefined
    };

    this.navBar = navBar;
    
    this.initialize = function () {
        this.initNavItemElement();
        this.initMenuItemsContainer();
    };

    this.initNavItemElement = function () {
        //Create a div element representing our nav item element and make it a child of the nav bar.
        //Then store a reference to the nav bar
        this.navItemElement = DomUtils.create('div', navBar.getNavItemsContainer(), 'nav-item');

        //Set the label
        this.navItemElement.innerHTML = `<label>${label}</label>`;

        // Set the width of the nav item element
        this.navItemElement.style.width = `${this.options.width}px`;

        this.navItemElement.onmouseenter = this.onMouseEnter.bind(this);

        this.navItemElement.onmouseleave = this.onMouseLeave.bind(this);

        this.navItemElement.onclick = this.onClick.bind(this);

        document.addEventListener('click', this.hideMenuItemsContainer.bind(this));

    };

    this.onMouseEnter = function(e){
        DomUtils.addClassName(this.navItemElement, 'hover');

    };

    this.onMouseLeave = function (e){
        DomUtils.removeClassName(this.navItemElement, 'hover');
    };

    this .onClick = function (e){
        if(this.menuItemsContainer.style.height === '0px'){
            this.showMenuItemsContainer();
        }
        else{
            this.hideMenuItemsContainer();
        }

        if(this.options.onClick){
            this.options.onClick(e);
        }

        e.cancelBubble = true;
    };

    this.initMenuItemsContainer = function (){
        //create an array to hold our menu items
        this.menuItemsContainer = DomUtils.create('div', this.navItemElement, 'menu-items-container');

        this.hideMenuItemsContainer();

        //Create a div element that holds our menu items
        this.menuItems = [];

    };

    this.showMenuItemsContainer = function (){
        if(this.menuItems.length === 0){
            return;
        }
        var totalHeight = this.menuItems
        .map(function (menuItem) {return menuItem.getHeight(); })
        .reduce(function (fullHeight, height) {return fullHeight + height; });
        this.menuItemsContainer.style.height =  `${totalHeight}px`;
        this.menuItemsContainer.style.border = '';
    };

    this.hideMenuItemsContainer = function () {
        this.menuItemsContainer.style.height = '0px';
        this.menuItemsContainer.style.border = '0px';
    };

    this.getWidth = function(){
        return this.options.width;
    };


    this.getNavItemElement = function () {
        return this.navItemElement;
    };

    this.getMenuItemsContainer = function(){
        return this.menuItemsContainer;
    };

    this.setMenuItemsContainerWidth = function (width) {
        this.menuItemsContainer.style.width = `${width}px`;

        //After updating the container width, update left CSS so that it may be centered with the nav item
        this.menuItemsContainer.style.left = `${(this.getWidth() - width) / 2}`;
    };

    this.addMenuItem = function(label, width){
        var menuItem = new MenuItem(this, label, { width });
        this.menuItems.push(menuItem);

        //Single quotes is like the equivalent of false
        if (!this.menuItemsContainer.style.width){
            this.setMenuItemsContainerWidth(width);
        }
        else{
            var numberString = this.menuItemsContainer.style.width.substring(0, this.menuItemsContainer.style.width.length - 2);
            var currentWidth = parseInt(numberString);

            if(currentWidth < width){
                this.setMenuItemsContainerWidth(width);
            }
        }

        return menuItem;
    };

    this.initialize();
};