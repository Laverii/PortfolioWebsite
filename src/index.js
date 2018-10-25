window.onload = function (e) {
	var navBar = new NavBar();
	var sectionContainer = new Sectioncontainer();

	var clearSectionContainer = function () {
		while(sectionContainer.getContainer().children.length > 0){
			sectionContainer.getContainer().removeChild(sectionContainer.getContainer().lastChild);
		}
	};

	var displayAboutMe = function () {
		clearSectionContainer();

		new AboutMe(sectionContainer);
	};
	
	displayAboutMe();

	navBar.addNavItem('About me', 150, displayAboutMe);

	var projectListNavItem = navBar.addNavItem('Project List', 150);
	projectListNavItem.addMenuItem('Journey through Memories', 200);
	projectListNavItem.addMenuItem('Do it for the Cookie', 150);
	projectListNavItem.addMenuItem('Loneliness Breaks the Spirt', 220);
	projectListNavItem.addMenuItem('Wish you Were Here', 150);
	projectListNavItem.addMenuItem('Halloween Candy Hunt', 160);
	projectListNavItem.addMenuItem('Level Design 3D', 150);




	navBar.addNavItem('Artwork', 150);

	
};