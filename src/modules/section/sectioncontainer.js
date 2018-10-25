var Sectioncontainer = function(){
    this.initialize = function() {
        var parent = document.getElementById('app');
        this.sectionContainer = DomUtils.create('div', parent, 'section-container');

    };

    this.getContainer = function(){
        return this.sectionContainer;
    }

    this.initialize();
};