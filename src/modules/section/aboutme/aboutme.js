var AboutMe = function(sectionContainer) {
    this.sectionContainer = sectionContainer;

    this.initialize = function (){
        this.aboutMeElementContainer = DomUtils.create('div', this.sectionContainer.getContainer(), 'about-me-container');
        this.aboutMeImageContainer = DomUtils.create('div', this.aboutMeElementContainer, 'about-me-image-container');
        this.aboutMeDescriptionContainer = DomUtils.create('div', this.aboutMeElementContainer, 'about-me-description-container');

        this.addFullName();
        this.addJobTitle();
        this.addDescription();
    };

    this.addFullName = function() {
        this.fullNameElement = DomUtils.create('h1', this.aboutMeDescriptionContainer, 'about-me-full-name');
        this.fullNameElement.innerHTML = 'Inkan Hertanto';
    };

    this.addJobTitle = function (){
        this.jobTitleElement = DomUtils.create('h2', this.aboutMeDescriptionContainer, 'about-me-job-title');
        this.jobTitleElement.innerHTML = 'Game Designer - Level Designer';
    };

    this.addDescription = function(){
        this.descriptionContainer = DomUtils.create('div', this.aboutMeDescriptionContainer, 'about-me-description');
        this.descriptionContainer.innerHTML = '<p>Welcome to my portfolio! I have many game design projects as well as artwork featured in my gallery below. Click on the image to see more details!</p>'
        + '<p>I have a B.S in Cognitive Science with a specialization in Human Computer Interaction from UC San Diego and a M.S in Games and Playable Media from UC Santa Cruz.'
        + 'I enjoy playing games as much as I love making them. I am inspired by many JRPGs and Nintendo games and are the reasons why I want to pursue this field.'
        + ' I also enjoy anime and cosplaying as well as trading card games such as Cardfight!! Vanguard and Pokemon.</p>'
        + '<p>I am always looking for more creative and innovative ways in the field of game design. I hope my projects will give an insight on what I have created!​</p>';
    };

    this.getSection = function (){
        return this.aboutMeElementContainer;
    };

    this.initialize();
};