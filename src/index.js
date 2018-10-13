window.onload = function (e) {
	var navBar = new NavBar();
	navBar.addNavItem('About me', 150);

	var projectListNavItem = navBar.addNavItem('Project List', 150);
	projectListNavItem.addMenuItem('Journey through Memories');

	navBar.addNavItem('Artwork', 150);
};