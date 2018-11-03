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
    };

    this.addJobTitle = function (){
        this.jobTitleElement = DomUtils.create('h2', this.aboutMeDescriptionContainer, 'about-me-job-title');
    };

    this.addDescription = function(){
        this.descriptionContainer = DomUtils.create('div', this.aboutMeDescriptionContainer, 'about-me-description');

        var downloadResumeButton = new Button(this.descriptionContainer, 
            {
            label: 'Download Resume', 
            className: 'download-resume-button',
            callback: function(e){
                window.open('assets/resume.pdf');
            }
        }
        );
    };

    this.addParagraph = function(text){
        var paragraph = DomUtils.create('p');
        this.descriptionContainer.insertBefore(paragraph, this.descriptionContainer.lastChild);
        paragraph.innerHTML = text;
    };

    this.setTitle = function(title){
        this.jobTitleElement.innerHTML = title;
    };

    this.setFullName = function(fullName){
        this.fullNameElement.innerHTML = fullName;
    };

    this.setImage = function(pathToImage){
        var img = DomUtils.create('img', this.aboutMeImageContainer);
        img.src = pathToImage;
    };

    this.getSection = function (){
        return this.aboutMeElementContainer;
    };

    this.initialize();
};