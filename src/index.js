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
		var aboutMe = new AboutMe(sectionContainer);
		aboutMe.setFullName('Inkan Hertanto');
		aboutMe.setTitle('Game Designer - Level Designer');
		aboutMe.addParagraph('Welcome to my portfolio! I have many game design projects as well as artwork featured in my gallery below. Click on the image to see more details!');
		aboutMe.addParagraph('I have a B.S in Cognitive Science with a specialization in Human Computer Interaction from UC San Diego and a M.S in Games and Playable Media from UC Santa Cruz.'
        + 'I enjoy playing games as much as I love making them. I am inspired by many JRPGs and Nintendo games and are the reasons why I want to pursue this field.'
		+ ' I also enjoy anime and cosplaying as well as trading card games such as Cardfight!! Vanguard and Pokemon.');
		aboutMe.addParagraph('I am always looking for more creative and innovative ways in the field of game design. I hope my projects will give an insight on what I have created!');
		aboutMe.addParagraph('Picture done by Pacific Media Expo. My cosplay is Totori from Aterlier Meruru.');
		aboutMe.setImage('assets/aboutMe_picture.jpeg');
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